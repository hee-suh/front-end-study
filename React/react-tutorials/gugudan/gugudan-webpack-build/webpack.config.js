const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'gugudan-setting',
  mode: 'development',  // production
  devtool: 'eval',      // hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./gugudan']
  },

  // watch: true,

  module: { // Loader
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            // preset-env 설정 중요
            targets: {
              // Reference. https://github.com/browserslist
              browsers: ['> 1% in KR'],
            },
          }], 
          '@babel/preset-react',
        ],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    }],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },

};