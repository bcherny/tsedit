const fs = require('fs')

const b = require('browserify')({
  entries: ['./src/index.tsx'],
  extension: ['js', 'ts', 'tsx'],
  // external: ['lodash', 'react', 'react-dom'],
  cache: {},
  debug: true,
  packageCache: {}
})
.plugin('tsify', {typescript: require('typescript')})
.plugin('watchify')
// .transform('browserify-shim')

function bundle() {
  return b.bundle()
  .on('error', error => console.error(error.toString()))
  .on('log', msg => console.info(msg))
  .pipe(fs.createWriteStream('./dist/bundle.js'))
}

b.on('update', bundle)
bundle()