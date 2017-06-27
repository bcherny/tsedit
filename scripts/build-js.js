const fs = require('fs')

module.exports.options = {
  debug: false,
  detectGlobals: false,
  entries: ['./src/client/index.tsx'],
  extension: ['js', 'ts', 'tsx'],
  external: ['lodash', 'react', 'react-dom'],
  insertGlobalVars: false,
  bare: true
}

require('browserify')(module.exports.options)
  .plugin('tsify', {
    typescript: require('typescript')
  })
  .transform('browserify-shim', {
    "react": "global:React",
    "react-dom": "global:ReactDOM"
  })
  .bundle()
  .on('error', error => console.error(error.toString()))
  .on('log', msg => console.info(msg))
  .pipe(fs.createWriteStream('./dist/client/bundle.js'))