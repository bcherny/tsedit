module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({ browsers: '>2%' }),
    require('postcss-inline-svg')(),
    require('postcss-svgo')(),
  ]
}
