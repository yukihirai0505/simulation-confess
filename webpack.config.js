var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    jsx: "./src/index.jsx",
    css: "./src/main.css",
    html: "./src/index.html",
  },

  output: {
    path: __dirname + "/static",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader"},
      { test: /\.html$/, loader: "file-loader?name=[name].[ext]" },
      { test: /\.css$/, loader: "file-loader?name=[name].[ext]" },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader","babel-loader"]
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        eslint: {
          configFile: __dirname + '/.eslintrc'
        }
      }
    })
  ]
};
