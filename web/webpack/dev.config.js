const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
	
  devtool: '#eval-source-map',

  devServer: {
    inline: true,
    contentBase: 'public',
    port: process.env.PORT || 3001,
  },

})