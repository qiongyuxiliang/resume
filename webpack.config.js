const path = require('path');
const { WebPlugin } = require('web-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
devServer: {

port: 8082,

contentBase: path.join(__dirname, 'src'),

open: true

},
  output: {
    publicPath: '',
    filename: '[name].js',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    // es tree-shaking
    mainFields: ['jsnext:main', 'browser', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // 提取出css
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader' ]
        }),
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.less$/,
        // 提取出css
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader?compress', 'postcss-loader'],
        })
      },
          {
            test: /\.css$/,
            // 提取出css
            loaders: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader','less-loader'],
            }),
      },
      {
        test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
        loader: 'base64-inline-loader',
      },
    ]
  },
  entry: {
    main: './src/main.js',
  },
  plugins: [
    new WebPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ],
  devtool: 'source-map',
};
