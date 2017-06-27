import * as React from 'react'
import { Editor } from '../editor/Editor'
import { compile } from '../../utils/compile'
import { run } from '../../utils/run'

type Props = {}

type State = {
  committedEdits: string[]
  count: number
  results: { code: string, count: number, result: any, topOffset: number }[]
}

const LINE_HEIGHT = 28

export class App extends React.Component<Props, State> {

  state: State = {
    committedEdits: [],
    count: 0,
    results: []
  }

  render() {
    return <div className='Columns'>
      <div className='Column Left EditorContainer'>
        <Editor lineNumberOffset={0} isReadOnly={true} height={this.committedLines() * LINE_HEIGHT} value={this.state.committedEdits.join('\n')} />
        <Editor lineNumberOffset={this.committedLines()} onChange={this.evaluate} value='' lib={this.state.committedEdits.join('\n')} />
      </div>
      <div className='Column Right ResultsContainer'>
        {this.state.results.map(({ count, result, topOffset }) =>
          <div className='Result' key={count} style={{ top: topOffset }}>
            { result }
          </div>
        )}
      </div>
    </div>
  }

  committedLines() {
    return this.state.committedEdits.reduce((prev, cur) => prev + cur.split('\n').length, 0)
  }

  evaluate = async (ts: string, top: number) => {
    this.setState({
      committedEdits: [...this.state.committedEdits, ts],
      count: this.state.count + 1,
      results: [...this.state.results, {
        code: ts,
        count: this.state.count,
        result: await run(compile(this.state.committedEdits.join('\n') + '\n' + ts)),
        topOffset: top + (this.committedLines() * LINE_HEIGHT)
      }]
    })
  }
}
