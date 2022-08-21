const path = require('path')

const rootpath=require('../utility/rootpath')

exports.myShop=(req, res, next)=>{
    res.sendFile(path.join(rootpath,'views','shop.html'))
}