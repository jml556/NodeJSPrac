const http = require('http')
const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('In the middlkeware')
    next()
})

app.use((req, res, next) => {
    console.log('In the next middlkeware')
    res.send('<h1>Hello Worldd</h1>')
})

app.listen(3000)