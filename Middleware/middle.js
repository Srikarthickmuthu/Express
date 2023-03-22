const express= require("express");

const app =express();

const requestTime = function(req,res,next){
    req.requestTime= Date.now();
    next();
}

app.use(requestTime);

app.get("/",(req,res)=>{
    let response = "hello world<br><br>";

    response+=`Response at the time is ${req.requestTime}`;

    res.send(response);
})

app.listen(3000);