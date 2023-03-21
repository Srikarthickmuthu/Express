const express = require("express");

const app=express();

app.get("/hello",(req,res)=>{
    res.send("Hello");
})

app.get("/hello/a",(req,res,next)=>{
    console.log("To the next function");
    next()
},(req,res)=>{
    res.send("Hello form A")
})

const a= function(req,res,next){
    console.log("Function a");
    next();
}
const b= function(req,res,next){
    console.log("Function b");
    next();
}
const c= function(req,res,next){
    console.log("Function c");
    next();
}
const d= function(req,res,next){
    console.log("Function d");
    res.send("Array of function handlers")
}

app.get("/hello/b",[a,b,c,d])

app.get("/hello/c",[a,b,c],(req,res,next)=>{
    console.log("The response will come from the next function");
    next();
},(req,res)=>{
    res.send("The response from the next function")
})
app.listen(3000);