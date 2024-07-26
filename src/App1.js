
import './App.css';
import { Fa500Px, FaAccusoft, FaAddressBook, FaBeer } from "react-icons/fa";

function App() {         // 대문자로 시작, 
  var r = true
  return (
    <>
      {/* jsx 안에 자바스크립트를 넣을라고 하면 중괄호 '{ }' ,
      하나로 감싸야함 ex: div를 감싸는 div를 만들어야함  */}

      {/* jsx는 for  => map
                if   => 3항연산자 or && . || */}

      {/* use state : use는 hook */}
      {/* 렌더링  : 코드를 화면에 뿌림  */}

      {/* on이 붙으면 클릭이벤트 */}

      {r ? (<div>
        사랑
      </div>) :

        (<div>
          믿음
        </div>)}

      <hr />
      {r && <div>홍콩</div>}

    </>
  )

}

export default App;
