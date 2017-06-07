// Main point of the appliction
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
// const router = require('./router')
// const mongoose = require('mongoose');
const cors = require('cors');

const axios = require('axios');

// DB Setup
// mongoose.connect('mongodb://localhost:auth/auth')




// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
// router(app);
// app();

const url = 'http://api.brewerydb.com/v2/hops?key=e61443089ea955edc0ad009ec7d5fc1a'
const request = axios.get(url,{
    headers: { 'Access-Control-Allow-Origin': '*' }
  })
  .then(response => {
    console.log(response);
  })



// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Sever listerning on: ', port);
