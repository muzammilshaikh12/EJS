const express= require('express')

const router = express.Router()

const fs =require('fs')

const array = []

router.post('/',(req,res,next)=>{
    array.push(`${req.body.username}:${req.body.message}`)
    fs.writeFileSync('chat_history.txt', array.toString())
    const user = fs.readFileSync('chat_history.txt',encoded=('utf-8'))
    console.log(user.split(':')[0])
     res.redirect('/')
 })

 module.exports = router