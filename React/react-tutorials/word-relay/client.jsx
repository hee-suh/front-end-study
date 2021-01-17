const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./word-relay');

ReactDom.render(<WordRelay />, document.querySelector('#root'));