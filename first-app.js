const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.get('/favicon.ico', (req, res) => res.status(204));
app.use(bodyParser.urlencoded({extended: true}))



app.use(('/'), (req, res, next) => {
    console.log('In the next middlkeware')
    res.send('<h1>Hello Worldd</h1>')
})

app.listen(3000)