
const mongoose = require("mongoose")
const DB = process.env.MONGODB_URL

mongoose.connect(DB,{
    useNewUrlParser:true,
   useUnifiedTopology:true,
}).then(()=>{
   console.log("connection successful")
}).catch((err)=>console.log("no connection"))

// app.get('/',(req,res)=>{
// res.send('Hello world from server')

// })