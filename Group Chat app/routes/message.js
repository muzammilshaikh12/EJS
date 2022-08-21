const express = require('express')

const router = express.Router()

router.get('/',(req,res,next)=>{
    res.send('<form  onsubmit="document.getElementById(`username`).value = localStorage.getItem(`username`)" action="/" method="POST"><label>Enter your message here</label><input type="text" id="message" name="message"><input type="hidden" name="username" id="username"><button type="submit">Send</button></form>')
})

module.exports = router