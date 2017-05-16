const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "/"),
    compress: true,
    port: 3000
  },

  entry: path.join(__dirname, '/src/index.ts'),

  output: {
    path : path.join(__dirname, '/dist'),
    filename : 'bundle.js'
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js"],

    alias: {
      src: path.join(__dirname, '/src'),
      root: path.join(__dirname, '/')
    },
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules\/(?!(dva)\/).*/
      },

      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },

      {
        test: /\.(s?)css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }
    ]
  }
};