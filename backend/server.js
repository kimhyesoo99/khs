console.log('사랑');

const express = require('express')
const app = express()


app.get('/api/greeting', (req, res) => {
    console.log("여기 들어오는겨?")
    res.json({ message: "안녕 나는 server 야 ! " })
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('server is runing on the ${PORT}');
})