import * as React from 'react'
// import { parseTokenTheme } from '../../utils/theme'
// const theme = require('theme-quietlight-vsc/themes/QuietLight.json')
// console.log(theme)
// const parsedTheme = parseTokenTheme(theme.settings)

type Props = {
  height?: number
  isReadOnly?: boolean
  lineNumberOffset: number
  onChange?(text: string, top: number): void
  value: string
}

type State = {
  editor?: monaco.editor.IStandaloneCodeEditor
  isLoadingEditor: boolean
  text: string
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
  renderLineHighlight: 'none',
  scrollbar: '',
  value: '',
  wordWrap: true
}

export class Editor extends React.Component<Props, State> {

  state: State = {
    isLoadingEditor: false,
    text: ''
  }

  render() {
    return <div className='Editor' ref={div => this.initMonaco(div)} style={{ height: this.props.height }} />
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
    this.setState({ isLoadingEditor: true });
    (window as any).require(['vs/editor/editor.main'], () => {

      // monaco.editor.defineTheme('QuietLight', {
      //   base: 'vs',
      //   inherit: false,
      //   rules: [
      //     { token: 'editor.background', background: '000000' }
      //   ]
      // })

      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        allowNonTsExtensions: true,
        target: monaco.languages.typescript.ScriptTarget.ES5,
        noEmit: true,
        noLib: true
      })

      // EXPENSIVE: takes ~80ms/call
      let editor = monaco.editor.create(div, {
        ...MONACO_OPTIONS,
        lineNumbers: (n: number) => {
          console.log('lineNumber', n)
          return String(this.props.lineNumberOffset + n)
        },
        // readOnly: this.props.isReadOnly,
        value: this.props.value
      })

      editor.getModel().updateOptions({
        insertSpaces: true,
        tabSize: 2,
        trimAutoWhitespace: true
      })

      editor.onKeyDown(this.onKeyDown)
      this.setState({ editor, isLoadingEditor: false })
    })
  }

  componentWillUpdate({ value }: Props) {
    if (this.state.editor && value !== undefined) {
      console.log('set value', value)
      this.state.editor.setValue(value)
    }
  }

  componentWillUnmount(){
    if (this.state.editor) {
      this.state.editor.dispose()
    }
  }
}
