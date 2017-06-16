import 'monaco-editor/dev/vs/loader'

import * as React from 'react'
import { render } from 'react-dom'
import { App } from './components/app/App'

// tslint:disable-next-line:no-expression-statement
render(<App />, document.querySelector('#App'))
