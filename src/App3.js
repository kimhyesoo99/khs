import { useState } from 'react';
import './App.css';


function App() {

  const [first, setFirst] = useState(0)
  // useState(0)  : ()에 들어가는 변수의 따라 데이터 타입이 변함  
  const [second, setSecond] = useState(0)
  const [result, setResult] = useState(0)

  const sum = (i, j) => {
    console.log('더하기 함수가 눌렀어요')
    return setResult(Number(first) + Number(second))
  }

  const minus = (i, j) => {
    console.log('빼기 함수가 눌렀어요')
    return setResult(Number(first) - Number(second))
  }

  const mul = (i, j) => {
    console.log('곱하기 함수가 눌렀어요')
    return setResult(Number(first) * Number(second))
  }

  const div = (i, j) => {
    console.log('나누기 함수가 눌렀어요')
    return setResult(Number(first) / Number(second))
  }

  var funcs = [sum, minus, mul, div]

  return (
    <>

      <input type='text' onChange={(e) => setFirst(e.target.value)} />
      <input type='text' onChange={(e) => setSecond(e.target.value)} />
      {['+', '-', '*', '%'].map((i, idx) => <button onClick={funcs[idx]}>{i},{idx}</button>)}
      <hr />

      <input type='text' value={result} />

    </>
  );

}

export default App;








