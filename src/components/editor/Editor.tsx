import * as React from 'react'

type Props = {
  onChange(ts: string): void
}

type State = {
  editor?: monaco.editor.IStandaloneCodeEditor
  isLoadingEditor: boolean
  text: string
}

export class Editor extends React.Component<Props, State> {

  state: State = {
    isLoadingEditor: false,
    text: ''
  }

  render() {
    return <div>
      <div className='Editor' ref={div => this.initMonaco(div)} />
      <button className='Button RunButton' onClick={this.run}>Run</button>
    </div>
  }

  run = () => {
    let text = this.state.editor
      ? this.state.editor.getValue()
      : ''
    this.props.onChange(text)
  }

  onKeyDown = (e: monaco.IKeyboardEvent) => {
    if (e.keyCode === monaco.KeyCode.Enter && e.metaKey) {
      this.run()
    }
  }

  initMonaco(div: HTMLDivElement) {
    if (!div || this.state.editor || this.state.isLoadingEditor) {
      return
    }
    this.setState({ isLoadingEditor: true });
    (window as any).require(['vs/editor/editor.main'], () => {
      let options: monaco.editor.IEditorConstructionOptions = {
        contextmenu: false,
        fontFamily: 'Fira Mono',
        fontLigatures: true,
        fontSize: 18,
        formatOnPaste: true,
        formatOnType: true,
        language: 'typescript',
        lineHeight: 28,
        lineNumbers: 'off',
        renderLineHighlight: 'none',
        value: '',
        wordWrap: true
      }
      let editor = monaco.editor.create(div, options)
      editor.onKeyDown(this.onKeyDown)
      this.setState({ editor, isLoadingEditor: false })
    })
  }
  componentWillUnmount(){
    if (this.state.editor) {
      this.state.editor.dispose()
    }
  }
}
