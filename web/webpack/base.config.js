const webpack = require('webpack');
const modulesPath = 'node_modules';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');




module.exports = {
    entry: [
        path.resolve(__dirname, '../src/main')
    ],
    output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].bundle.[chunkhash].js',
  },
   resolve: {
    extensions: ['.js', '.jsx']
   
  },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                 
                loaders: ['babel-loader'],
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                  include: [ 
                                     
                    path.resolve(__dirname, modulesPath, 'common'),
                  ],
                loaders: ['babel-loader'],
            },
			  {
				test: /\.html$/,
				use: [
				  {
					loader: "html-loader"
				  }
				]
			  },
              { 
                test: /\.css$/, 
                use:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader'
                            
                        }
                    ]
                })
              },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader'
                            
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: ['./node_modules', './node_modules/grommet/node_modules']
                              }

                        },
                        {
                            loader: 'sass-resources-loader',
                            query: {
                                resources: [
                                path.resolve(__dirname, '../src/scss-resources/_colours.scss'),
                                path.resolve(__dirname, '../src/scss-resources/mixins.scss')
                                ],
                            }
                        }
                    ]
                })
            }
        ],
    },

    plugins: [
        new CleanWebpackPlugin(['public/*.*'], { root:path.resolve(__dirname, '../')}),
		new HtmlWebPackPlugin({
		  template: "./src/index.html",
		  filename: "./index.html"
		}),
        new webpack.EnvironmentPlugin([
            'NODE_ENV',
        ]),
         new ExtractTextPlugin('[name].bundle.[chunkhash].css')
    ]
};
