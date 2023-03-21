const express = require("express");

const app=express();

app.get("/download",(req,res)=>{
    res.download("file.txt");
})

app.get("/json",(req,res)=>{
    res.json({user:"karthick"});
});

app.get("/jsonp",(req,res)=>{
    res.jsonp({user:"karthick"});
});

app.get("/status",(req,res)=>{
    res.sendStatus(200);
});

app.listen(3000)
