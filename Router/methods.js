const express = require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.post("/",(req,res)=>{
    res.send("Hello");
})

app.put("/",(req,res)=>{
    res.send("Hello");
})

app.delete("/",(req,res)=>{
    res.send("Hello");
})


app.listen(3000);
