const cors = require('cors');
const express = require('express');
const app =express();
app.use(cors());
const DB = require('./dataBase');
require('dotenv').config();
app.use(express.json());
// app.use((req,res,next)=>{console.log(req.headers)});
const allroutes = require("./route");
app.use("/health",allroutes);
const port = process.env.PORT||5000;
app.listen(port,()=>{console.log(`server is running at ${port}`)});
DB(); 
