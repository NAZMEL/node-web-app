const express = require('express')


const app = express()
const PORT = 3000

app.listen(PORT, (error) =>{
    error ? console.log(error) : console.log(`Listening port ${PORT}`)
})

app.get('/', (req, res) =>{
    res.send('Hello world')
})