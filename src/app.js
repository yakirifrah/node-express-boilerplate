const path = require('path')
const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Success')
})

app.listen(3000, () => console.log('Example app is listening on port 3000'));
