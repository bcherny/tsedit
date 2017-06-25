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

  run = () =>
    this.props.onChange(this.state.text)

  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    this.setState({ text: e.currentTarget.value })

  onKeyDown = (e: monaco.IKeyboardEvent) => {
    console.log('onkey', e.keyCode, e.metaKey)
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
      let editor = monaco.editor.create(div, {
        value: this.state.text,
        language: 'javascript'
      })

      let modifier = editor.createContextKey('modifier', false)

      editor.addCommand(monaco.KeyCode.Enter, function() {
        console.log('command enter')
      }, 'modifier')

      editor.addCommand(monaco.KeyCode.Meta, e => {
        console.log('meta', e)
        modifier.set(true)
      }, '')

      // editor.onKeyUp(this.onKeyDown)
      editor.onDidChangeModelContent(({ text }) =>
        this.setState({ text })
      )
      this.setState({ editor, isLoadingEditor: false })
    })
  }
  componentWillUnmount(){
    if (this.state.editor) {
      this.state.editor.dispose()
    }
  }
}
