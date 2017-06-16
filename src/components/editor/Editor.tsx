import * as React from 'react'
import { KEYS } from '../constants/keys'

type Props = {
  onChange(ts: string): void
}

type State = {
  text: string
}

export class Editor extends React.Component<Props, State> {

  state: State = {
    text: ''
  }

  render() {
    return <textarea
      className='Code'
      onChange={this.onChange}
      onKeyDown={this.onKeyDown}
      value={this.state.text}
    />
  }
  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    this.setState({ text: e.currentTarget.value })

  onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.which === KEYS.ENTER && e.metaKey) {
      this.props.onChange(this.state.text)
    }
  }
}

// require.config({ paths: { vs: 'monaco-editor/dev/vs' } })

// export class Editor extends React.Component<Props, State> {
//   render() {
//     return <div ref={div => this.initEditor(div)} />
//   }
//   initEditor(div: HTMLDivElement) {
//     require(['vs/editor/editor.main'], () => {
//       monaco.editor.create(div, {
//         value: [
//           'function x() {',
//           '\tconsole.log("Hello world!");',
//           '}'
//         ].join('\n'),
//         language: 'typescript'
//       })
//     })
//   }
// }
