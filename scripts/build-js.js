const fs = require('fs')

module.exports.options = {
  debug: true,
  detectGlobals: false,
  entries: ['./src/index.tsx'],
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
  .pipe(fs.createWriteStream('./dist/bundle.js'))