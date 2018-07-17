const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const AWS = require('aws-sdk');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();



app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('client/build'));

// GET //


app.get('/sendTOAWS', (req,res)=>{
    res.status(200).send('ok now')
})


// POST //

// UPDATE //

// DELETE //

if(process.env.NODE_ENV ==='production'){
    const path = require('path');

    app.get('*', (req,res) =>{
        res.sendfile(path.resolve(__dirname,'../client','build','index.html'))
    })

}

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`SERVER RUNNNING AT PORT = ${port}`)
})