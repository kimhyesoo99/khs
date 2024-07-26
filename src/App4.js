import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [key, setKey] = useState('')
  const [list, setList] = useState([])

  const apiGet = async () => {
    var API_KEY = '45094798-cea65047379bf4c0991998a98';
    var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(key);
    const response = await axios.get(URL)
    console.log(response.data);
    setList(response.data.hits)
  }
  const getData = (e) => {
    setKey(e.target.value)
  }

  return (
    <>
      <input type='text' onChange={getData} />
      <button onClick={apiGet}>픽사베이에서 이미지 가져와</button>
      {list.map(i => <img src={i.webformatURL} alt='' />)}

    </>

  );

}

export default App;








