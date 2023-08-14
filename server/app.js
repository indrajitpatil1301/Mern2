require("dotenv").config()
const express = require("express")
const app = express()
// const mongoose = require("mongoose")
const User = require("./model/userSchema")


// require('./db/connect')
// const DB = process.env.MONGODB_URL
require('./db/connect')
// app.use(require('./router/auth'))
app.use(express.json())
const PORT = process.env.PORT


// const DB ="mongodb+srv://mern:ew6RyIeJ54rG8gdY@cluster0.h3dmgnd.mongodb.net/mernproject?retryWrites=true&w=majority"

app.use(require('./router/auth'))
const middleware=(req,res,next)=>{
    console.log("hello this is middle ware")
    next();
}



app.get('/about',middleware,(req,res)=>{
    res.send("hello from server this is about page")
})
app.get('/contact',(req,res)=>{
    res.send("hello from server this is about page")
})
app.get('/signin',(req,res)=>{
    res.send("hello from sign in  server this is about page")
})

app.get('/signup',(req,res)=>{
    res.send("hello from  sign up server this is about page")
})


app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})