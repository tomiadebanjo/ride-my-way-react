
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',

  optimization:{
    minimizer:[
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});
