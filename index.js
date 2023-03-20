const express=require("express");

const app=express();

app.get("/",(req,res)=>{
  res.send("hello world");
  console.log(req.hostname);
})
app.post("/",(req,res)=>{
  res.send("Got an post request");
  console.log(req.hostname);
})
app.put("/hello",(req,res)=>{
  res.send("Got an PUT request");
  console.log(req.hostname);
})
app.delete("/hello",(req,res)=>{
  res.send("Got an DELETE request");
  console.log(req.hostname);
})
app.listen(4000);
