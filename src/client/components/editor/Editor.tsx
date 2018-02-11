import * as React from 'react'
import { render } from 'react-dom'

type Props = {
  height?: number
  isReadOnly?: boolean
  lib?: string
  lineNumberOffset: number
  onChange?(text: string, top: number): void
  value: string
}

type State = {
  div?: HTMLDivElement
  editor?: monaco.editor.IStandaloneCodeEditor
  isLoadingEditor: boolean
  libCount: number
  text: string
  width?: number
}

const MONACO_OPTIONS: monaco.editor.IEditorConstructionOptions = {
  contextmenu: false,
  fontFamily: 'Fira Mono',
  fontLigatures: true,
  fontSize: 18,
  formatOnPaste: true,
  formatOnType: true,
  glyphMargin: false,
  language: 'typescript',
  // lineDecorationsWidth: 0,
  lineHeight: 28,
  lineNumbers: 'on',
  minimap: {
    enabled: false
  },
  renderLineHighlight: 'none',
  value: '',
  wordWrap: 'on'
}

const READONLY_OPTIONS: monaco.editor.IEditorConstructionOptions = {
  readOnly: true,
  scrollbar: {
    horizontal: 'hidden',
    vertical: 'hidden'
  },
  scrollBeyondLastLine: false
}

export class Editor extends React.Component<Props, State> {

  state: State = {
    isLoadingEditor: false,
    libCount: 0,
    text: ''
  }

  render() {
    return <div
      className={'Editor' + (this.props.isReadOnly ? ' ReadOnly' : '')}
      ref={div => this.initMonaco(div)}
      style={{ height: this.props.height }}
    />
  }

  run = () => {
    if (this.state.editor && this.props.onChange) {
      let text = this.state.editor.getValue()
      let [{ endLineNumber }] = this.state.editor.getSelections()
      let top = this.state.editor.getTopForLineNumber(endLineNumber)
      this.props.onChange(text, top)
    }
  }

  onKeyDown = (e: monaco.IKeyboardEvent) => {
    if (e.keyCode === monaco.KeyCode.Enter && e.metaKey) {
      this.run()
    }
  }

  initMonaco(div: HTMLDivElement | null) {
    if (!div || this.state.editor || this.state.isLoadingEditor) {
      return
    }
    this.setState({ div, isLoadingEditor: true, width: div.offsetWidth });
    (window as any).require(['vs/editor/editor.main'], () => {

      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        allowNonTsExtensions: true,
        alwaysStrict: true,
        experimentalDecorators: true,
        jsx: monaco.languages.typescript.JsxEmit.React,
        lib: ['dom', 'es2015', 'es2016.array.include'],
        noFallthroughCasesInSwitch: true,
        noImplicitAny: true,
        noImplicitReturns: true,
        noImplicitThis: true,
        strictNullChecks: true,
        target: monaco.languages.typescript.ScriptTarget.ES5
      })

      // EXPENSIVE: takes ~80ms/call
      let editor = monaco.editor.create(div, {
        ...MONACO_OPTIONS,
        ...(this.props.isReadOnly ? READONLY_OPTIONS : {}),
        lineNumbers: (n: number) => String(this.props.lineNumberOffset + n),
        value: this.props.value
      })

      editor.getModel().updateOptions({
        insertSpaces: true,
        tabSize: 2,
        trimAutoWhitespace: true
      })

      let overlayDiv = document.createElement('div')
      render(<CommandEnterToRun onClick={this.run} />, overlayDiv)
      let widget: monaco.editor.IOverlayWidget = {
        getDomNode: () => overlayDiv,
        getId: () => 'command-enter-to-run',
        getPosition: () => {
          return {
            preference: monaco.editor.OverlayWidgetPositionPreference.TOP_RIGHT_CORNER
          }
        }
      }
      editor.addOverlayWidget(widget)

      editor.onKeyDown(this.onKeyDown)
      this.setState({ editor, isLoadingEditor: false })
    })
  }

  onResize = () => {
    let { div, editor } = this.state
    if (div && editor) {
      editor.layout({
        height: this.props.height || div.offsetHeight,
        width: div.offsetWidth
      })
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUpdate({ height, value }: Props) {
    let { editor, width } = this.state
    if (editor) {
      if (value !== undefined) {
        editor.setValue(value)
      }
      if (height !== undefined && width !== undefined) {
        editor.layout({ height, width })
      }
      editor.render()
    }
  }

  componentDidUpdate() {
    let { height, lib, value } = this.props
    let { editor, width } = this.state
    if (editor) {
      if (value !== undefined) {
        editor.setValue(value)
      }
      if (height !== undefined && width !== undefined) {
        editor.layout({ height, width })
      }
      if (lib) {
        // hack!
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib, `lib${this.state.libCount++}.ts`)
      }
      editor.render()
    }
  }

  componentWillUnmount(){
    if (this.state.editor) {
      this.state.editor.dispose()
    }
  }
}

type CommandEnterToRunProps = {
  onClick(): void
}

let CommandEnterToRun: React.StatelessComponent<CommandEnterToRunProps> =
  ({ onClick }: CommandEnterToRunProps) =>
    <div className='CommandEnterToRun'>
      Press <span className='KeyPill' onClick={onClick}>⌘ + ENTER</span> to run
    </div>
