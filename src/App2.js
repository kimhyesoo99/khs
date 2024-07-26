import { useState } from 'react';
import './App.css';


function App() {

  const [cnt, setCnt] = useState(0)
  const [rr, setRr] = useState('')
  const increaseFive = () => setCnt(cnt + 5)
  const decreaseFive = () => setCnt(cnt - 5)
  const f = (e) => {
    console.log(e.target.value);
    setRr(e.target.value)
  }

  return (
    <>

      <span>{cnt}</span>
      <hr />
      <span>{rr}</span>
      <hr />

      <button onClick={decreaseFive}>+5</button>
      <button onClick={increaseFive}>-5</button>
      <input type='text' onChange={f} />


    </>
  )

}

export default App;


const [hyesoo, setHyesoo] = useState(0)
const clickEvt = () => {
  console.log('눌렀다')
  setHyesoo(hyesoo + 1)
}

const [khs, setKhs] = useState(0)
const increaseFive = () => {
  setKhs(khs + 5)
}


return (
  <>

    {/* 문1) 버튼 하나 생성하고 버튼이 누르면 5씩 증가하는 코드생성, useState도 만들기 */}

    <button onClick={clickEvt}>눌러라{hyesoo}</button>
    <button onClick={increaseFive}>눌러라{khs}</button>

  </>
)
