const resolve = require('path').resolve;

module.exports = () => {
  return{
    context:resolve('src'),
    entry:'./bootstrap.js',
    output:{
      path: resolve('dist'),
      filename:'bundle.js',
      publicPath: '/dist/'
    },
  }
}
