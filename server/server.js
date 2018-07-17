const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const AWS = require('aws-sdk');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();



app.use(bodyParser.json());
app.use(cookieParser());

// GET //


app.get('/sendTOAWS', (req,res)=>{
    res.status(200).send('ok now')
})


// POST //

// UPDATE //

// DELETE //



const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`SERVER RUNNNING AT PORT = ${port}`)
})