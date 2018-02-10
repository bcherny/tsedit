type State = {
  worker?: Worker
}

let state: State = {}

/** run some js in a webworker */
export function run<T = string>(js: string): Promise<T> {
  return new Promise((resolve, reject) => {
    let worker = init()
    worker.addEventListener('message', e => resolve(e.data), false)
    worker.addEventListener('error', e => reject(e), false)
    worker.postMessage(js)
  })
}

/** lazy intialize webworker */
function init() {
  if (!state.worker) {
    let blob = new Blob(
      [`self.onmessage = ({ data }) => self.postMessage(eval(data))`],
      { type: 'text/javascript' }
    )
    state.worker = new Worker(window.URL.createObjectURL(blob))
  }
  return state.worker
}

// export function run(js: string) {
//   return eval(js)
// }
