const express = require('express')

const router = express.Router()

router.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/int" method="POST"><label>Enter your Name here</label><input id="username" type="text" name"title"><button type="submit">Add</button></form>')
})

router.post('/int',(req,res,next)=>{
   res.redirect('/')
})

module.exports=router