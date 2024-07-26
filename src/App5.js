
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";



const label = { inputprops: { 'aria-label': 'Checkbox demo' } }

function App() {

  return (

    <>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </>

  )

}

export default App;

// const [a,b] = useState (10)

// [] : 배열
// a : 변수
// b : 함수

// useState (10) : a의 초깃값







