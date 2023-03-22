const express= require("express");

const app=express();

const path= require("path");

app.use(express.static(path.join(__dirname,"public/images")))

app.get("/static",(req,res)=>{
    res.render('home.ejs');
})

app.listen(3000);