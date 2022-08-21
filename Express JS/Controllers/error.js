exports.errorPage=(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error404.html'))
}