const express=require('express')
const app=express()
const mongoose = require('mongoose')
require ('dotenv').config({path : './config/.env'})

//create database with server
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify:false },(err)=> {
      err ? console.log(err) : console.log('database is connected')
})
//parse the data
app.use(express.json())
app.use('/users', require('./Routes/userRoutes'))
const port=5000

app.listen( port, (err)=> {
    err ? console.log(err) : console.log('the server is running on port 5000')
})