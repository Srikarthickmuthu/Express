const express = require("express");

const app= express();

app.get("/",(err,req,res,next)=>{
    if(err){
        next(errorHandler);
    }
    else{
        res.send("hello")
    }
})

function errorHandler(err,req,res,next){
    if(res.headersSent){
        return next(err)
    }
    res.status(500)
    res.render("error",{error:err})
}
app.listen(3000);
