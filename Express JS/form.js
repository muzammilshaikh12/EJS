
const http = require('http')

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const adminRoute = require('./routes/admin.js')

const shopRoute = require('./routes/shop.js')

const contactFormroute = require('./routes/contactform.js')

const successRoute = require('./routes/success.js')

const productsroute = require('./routes/product.js')

const errorPage = require('./Controllers/error.js')

const path = require('path')

app.use(bodyParser.urlencoded())

app.use(adminRoute)

app.use(shopRoute)

app.use(contactFormroute)

app.use(successRoute)

app.use(productsroute)

app.use('/',(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error404.html'))
})

app.listen(4000)

