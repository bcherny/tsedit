const fs = require('fs')
const {options} = require('./build-js')

const b = require('browserify')(Object.assign({}, options, {
  cache: {},
  debug: true,
  packageCache: {}
}))
.plugin('tsify', {typescript: require('typescript')})
.plugin('watchify')
.transform('browserify-shim', {
  "lodash": "global:_",
  "react": "global:React",
  "react-dom": "global:ReactDOM"
})

function bundle() {
  return b.bundle()
  .on('error', error => console.error(error.toString()))
  .on('log', msg => console.info(msg))
  .pipe(fs.createWriteStream('./dist/client/bundle.js'))
}

b.on('update', bundle)
bundle()