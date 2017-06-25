import 'monaco-editor/min/vs/editor/editor.main.js'
import * as React from 'react'

type Props = {
  onChange(ts: string): void
}

type State = {
  editor?: monaco.editor.IStandaloneCodeEditor
  text: string
}

export class Editor extends React.Component<Props, State> {
  render() {
    return <div ref={div => this.initMonaco(div)} />
  }
  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    this.setState({ text: e.currentTarget.value })

  onKeyDown = (e: monaco.IKeyboardEvent) => {
    if (e.keyCode === monaco.KeyCode.Enter && e.metaKey) {
      this.props.onChange(this.state.text)
    }
  }

  initMonaco(div: HTMLDivElement) {
    (window as any).require(['vs/editor/editor.main'], () => {
      if (typeof monaco !== 'undefined') {
        let editor = monaco.editor.create(div, {
          value: this.state.text,
          language: 'javascript'
        })
        editor.onKeyDown(this.onKeyDown)
        editor.onDidChangeModelContent(e => {
          this.setState({
            text: e.text
          })
        })
        this.setState({ editor })
      }
    })
  }
  componentWillUnmount(){
    if (this.state.editor) {
      this.state.editor.dispose()
    }
  }
}
