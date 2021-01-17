const React = require('react');
const ReactDom = require('react-dom');
const { useState, useRef } = React;

const GuGudanWebpack = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first*second) {
      setResult('정답');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <div>{first} 곱하기 {second}는?</div>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="number"
          value={value}
          onChange={onChange}
        />
        <button>입력!</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

ReactDom.render(<GuGudanWebpack />, document.querySelector('#root'));