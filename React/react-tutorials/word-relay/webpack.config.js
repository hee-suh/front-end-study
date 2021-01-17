const path = require('path');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development',  // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']  // entry 확장자 알아서 찾아서 매치
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
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      }
    }],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  }, // 출력
};