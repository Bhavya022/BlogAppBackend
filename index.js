const express = require('express') 
const bodyParser = require('body-parser') 
const mongoose = require('mongoose') 
const cors = require('cors') 
const authRoutes = require('./routes/authRoutes') 
const blogRoutes = require('./routes/blogRoutes')  
const {connection}=require('./db') 
require ('dotenv').config() 
const app=express() 

app.use(cors()) 
app.use(express.json()) 
app.use(bodyParser.json()) 

app.use('/api',authRoutes) 
app.use('/api',blogRoutes) 


app.listen(process.env.PORT,async ()=>{
    await connection 
    console.log('server start mongodb connect')

})