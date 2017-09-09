// eslint-disable-next-line jsx-a11y/href-no-hash
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/client/scripts/client.jsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // to allow jsx files to be rendered
      // { test: /\.jsx$/, loader: 'babel-loader', exclude: '/node_modules/' },
      { test: /src\/.+.jsx$/, loader: 'babel-loader', exclude: '/node_modules/' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
