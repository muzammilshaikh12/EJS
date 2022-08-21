const path = require('path')

const rootpath=require('../utility/rootpath')

exports.contactForm=(req, res, next)=>{
    res.sendFile(path.join(rootpath,'views','contact_form.html'))
}