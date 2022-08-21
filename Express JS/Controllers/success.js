const path= require('path')

const rootpath=require('../utility/rootpath')

exports.successPage = (req,res,next)=>{
    res.sendFile(path.join(rootpath,'views','success.html'))
}