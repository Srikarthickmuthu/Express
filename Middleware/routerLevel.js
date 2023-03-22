const express = require("express");

const app= express();

const router= express.Router();

router.use((req,res,next)=>{
    console.log('Time:', Date.now())
    next()
})

app.listen(3000)