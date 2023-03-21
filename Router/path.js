const express = require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.get("/hello",(req,res)=>{
    res.send("Hello from hello path");
})

app.get("/hello.txt",(req,res)=>{
    res.send("/hello.txt");
})

app.get("/ab+cd",(req,res)=>{
    res.send("/ab*cd");
})

app.get("/ab*cd",(req,res)=>{
    res.send("/ab*cd");
})

app.get("/ab(cd)?e",(req,res)=>{
    res.send("/ab(cd)?e");
})

app.get("/a/",(req,res)=>{
    res.send("/a/");
})

app.get("/.*product$/",(req,res)=>{
    res.send("/.*product$/");
})

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.listen(3000);