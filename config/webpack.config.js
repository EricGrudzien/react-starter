// eslint-disable-next-line jsx-a11y/href-no-hash
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/client/scripts/client.jsx'),
  output: {
    path: path.resolve(__dirname, '../dist/scripts'),
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
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // resolve-url-loader may be chained before sass-loader if necessary
          use: [{
            loader: 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            // Can use below make less terse
            // loader: 'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          },
          {
            loader: 'sass-loader?sourceMap',
          }],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('../styles/styles.css', {
      allChunks: true,
    }),
  ],
  resolve: {
    // To help identify where to look for resolving import or require statements
    modules: [
      'src',
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.scss'],
  },
};
