const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.get('/',(req, res)=>{
    console.log('Cookies: ', req.cookies)
    console.log('Signed Cookies: ', req.signedCookies)
  })
app.listen(3000);