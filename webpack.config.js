const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const bootstrapEntryPoints = require('./webpack.bootstrap.config.js')
const isProd = process.env.NODE_ENV === 'production';
const cssDev = [
	'style-loader',
	'css-loader?sourceMap',
	'sass-loader',
	{
		loader: 'sass-resources-loader',
		options: {
			// Provide path to the file with resources
			resources: [
                './src/resources.scss'
            ],
		},
	}];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader','sass-loader', {
		loader: 'sass-resources-loader',
		options: {
			// Provide path to the file with resources
			resources: [
				'./src/resources.scss'
			],
		},
	}],
    publicPath: '/dist'
})
const cssConfig = isProd ? cssProd : cssDev;
const bootstrapConfig =  isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
module.exports = {
  entry: {
    app: './src/app.js',
    bootstrap: bootstrapConfig
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use:cssConfig
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
            'file-loader?name=img/[name].[ext]',
            'image-webpack-loader'
        ]
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports-loader?jQuery=jquery'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
    stats: 'errors-only'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ReactJS-Mastering-Redux',
      hash: true,
      excludeChunks: [''],
      template: './src/index.html'
    }),
    new ExtractTextPlugin({
      filename: "/css/[name].css",
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'src/*.html')),
    })
  ]
};
