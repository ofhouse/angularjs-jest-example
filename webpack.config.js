const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',

  module: {
    rules: [
      { loader: 'exports-loader?window.angular', test: require.resolve('angular') },

      {
        test: /\.html$/,
        use: 'raw-loader',
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    // global
    new webpack.ProvidePlugin({
      angular: 'angular',
      moment: 'moment',
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
