const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    if (req.originalUrl.includes('favicon.ico')) {
      res.status(204).end()
      console.log("You're in the first middleware")
    }
    next();
  })

app.use((req, res, next) => {
    console.log('second')
    next()
})

app.use((req, res, next) => {
    console.log("you're in the second middleware")
    res.send(`<h1>Hello from Express.js</h1>`)
    next()
})

app.use((req, res, next) => {
    console.log("you're in the third middleware")
    res.send(`<h1>Hello from Express.js2</h1>`)
})

const server = http.createServer(app);

server.listen(3000)