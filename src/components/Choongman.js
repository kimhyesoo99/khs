
import React, { useState } from 'react'

const Choongman = () => {
    const [a, setA] = useState({ a: 10 })
    console.log(a, typeof (b))
    return (
        <div>Choongman <span>{a.a}</span>

            <button onClick={() => setA({ a: a.a * 100 })}>이것을 누르면 a의 값이 변경</button>

        </div>
    )
}

export default Choongman