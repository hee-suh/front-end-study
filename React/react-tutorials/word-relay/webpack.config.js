const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development',  // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],  // entry 확장자 알아서 찾아서 매치
  },

  entry: {
    // app: ['./client.jsx', './word-relay.jsx'],
    app: ['./client'],  // word-relay.jsx는 client.jsx에 포함되어 있기 때문에 따로 넣어줄 필요 X
  }, // 입력

  module: {
    rules: [{
      test: /\.jsx?/,  // regular expression
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'],
            },
          }], 
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel',
        ],
      }
    }],
  },

  plugins: [
    new RefreshWebpackPlugin()
  ],
    
  output: {
    path: path.join(__dirname, 'dist'), // 실제 경로
    filename: 'app.js'
  }, // 출력

  devServer: {
    publicPath: '/dist/',               // 가상 경로
    hot: true,
  },
};