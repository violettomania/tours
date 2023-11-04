/* eslint-env node */
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/index.tsx'),
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, '_site'),
    publicPath: './',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/, // Match .js files
        use: 'babel-loader', // Use babel-loader for JavaScript files
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Match .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: './',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
