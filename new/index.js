var express=require("express")

const app=express();

app.get("/read",(req,res)=>{
    res.send("list of users");
})

app.listen(3000);