import * as React from 'react'
import { chain } from 'lodash'
import { Editor } from '../editor/Editor'
import { compile } from '../../utils/compile'
import { run } from '../../utils/run'
import { Result } from '../../datatypes'

type Props = {}

type State = {
  committedEdits: string[]
  count: number
  results: ResultDescription[]
}

type ResultDescription = {
  code: string
  count: number
  result: Result
  topOffset: number
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
          <div className={'Result ' + result.type} key={count} style={{ top: topOffset }}>
            { result.value }
          </div>
        )}
      </div>
    </div>
  }

  committedLines() {
    return this.state.committedEdits.reduce((prev, cur) => prev + cur.split('\n').length, 0)
  }

  evaluate = async (ts: string, top: number) => {
    let result: Result
    let existingCode = chain(this.state.committedEdits)
      .zip(this.state.results)
      .filter(([_, r]: [string, ResultDescription]) => r.result.type === 'success')
      .map(([_]) => _)
      .value()
    try {
      result = {
        type: 'success',
        value: await run(compile(existingCode.join('\n') + '\n' + ts))
      }
    } catch (e) {
      result = {
        type: 'error',
        value: e.message
      }
    }
    this.setState({
      committedEdits: [...this.state.committedEdits, ts],
      count: this.state.count + 1,
      results: [...this.state.results, {
        code: ts,
        count: this.state.count,
        result,
        topOffset: top + (this.committedLines() * LINE_HEIGHT)
      }]
    })
  }
}
