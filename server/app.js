'use strict'

//imports
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
var path = require('path');
var cookieParser = require('cookie-parser');

//create express.js
const app = express()
const port = 3000

//set views folder and rendering engine
app.set('views', __dirname + '/../client');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')

//set other express.js configs
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(__dirname + '/../client')); //static routing in order for express to easily serve view files */

//ROUTES:
app.get('/', (request, response) => {
  response.render('index')
})

//start server
app.listen(port, (err) => {
  if (err) {
    return console.log('Server side error :( something bad happened: ', err)
  }

  console.log(`Server listening on ${port}`)
})
