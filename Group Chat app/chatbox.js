const express = require('express')

const nameRoute = require('./routes/name.js')

const messageRoute = require('./routes/message.js')

const storeRoute = require('./routes/store.js')

const chatbox = express()

const bodyParser = require('body-parser')

chatbox.use(bodyParser.urlencoded())

chatbox.use(nameRoute)

chatbox.use(messageRoute)

chatbox.use(storeRoute)

chatbox.use('/',(req,res,next)=>{
    res.status(404).send('<h1>Page not Found</h1>')
})

chatbox.listen(3000)