import * as React from 'react'
import { Editor } from '../editor/Editor'
import { compile } from '../../utils/compile'
import { run } from '../../utils/run'

type Props = {}

type State = {
  count: number
  editorTopOffset: number
  results: { code: string, count: number, result: any, topOffset: number }[]
}

export class App extends React.Component<Props, State> {

  state: State = {
    count: 0,
    editorTopOffset: 0,
    results: []
  }

  render() {
    return <div className='Columns'>
      <div className='Column Left'>
        <div ref={this.onRenderEditor}>
          <Editor onChange={this.evaluate} />
        </div>
      </div>
      <div className='Column Right'>
        {this.state.results.map(({ count, result, topOffset }) =>
          <div className='Result' key={count} style={{ top: topOffset }}>
            { result }
          </div>
        )}
      </div>
    </div>
  }

  evaluate = (ts: string) => {
    this.setState({
      count: this.state.count + 1,
      results: this.state.results.concat({
        code: ts,
        count: this.state.count,
        result: run(compile(ts)),
        topOffset: this.state.editorTopOffset
      })
    })
  }

  onRenderEditor = (div: HTMLDivElement) => {
    this.setState({ editorTopOffset: div.offsetTop })
  }
}
