const path= require('path');

const rootPath = require('../utility/rootpath');

exports.addProduct = (req, res, next)=>{
    res.sendFile(path.join(rootPath,'views','admin.html'))
}

exports.readProduct = (req,res,next)=>{
    res.redirect('/')
}