const React = require('react');
const { Component } = react;

class WordRelay extends Component {
  state = {
    text: 'Hello, webpack',
  };

  render() {
    return <h1>{this.state.text}</h1>
  }
}

module.exports = wordRelay;