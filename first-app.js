const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

const app = express()

app.get('/favicon.ico', (req, res) => res.status(204));
app.use(bodyParser.urlencoded({extended: true}))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found</h1>')
})


app.listen(3000)