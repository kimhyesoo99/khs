import axios from 'axios'
import React, { useState } from 'react'

const Bogeun = () => {
    const [resp, setResp] = useState('')
    const f = async () => {
        const res = await axios.get("/api/greeting")
        console.log(res)
        setResp(res.data.message)
    }
    return (
        <div>
            {resp}
            <button onClick={f}>비동기통신</button>
        </div>
    )
}

export default Bogeun