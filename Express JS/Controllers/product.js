const path = require('path')

const rootpath=require('../utility/rootpath')

exports.myProducts=(req, res, next)=>{
    res.sendFile(path.join(rootpath,'views','products.html'))
}