const express = require("express");

const app=express();

app.get("/users/:userId/books/:bookId",(req,res)=>{
    res.send(req.params);
    console.log(req.params)
})
app.get("/user/:userId",(req,res)=>{
    res.send(req.params);
    console.log(req.params)
})
app.listen(3000);