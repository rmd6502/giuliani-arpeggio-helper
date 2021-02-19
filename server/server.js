/* Giuliani Arpeggio Helper App Back-end */

// Express setup 
const express = require('express');
const mongoose = require('mongoose');
const config = require('config'); // stores the URI securely 
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;
const app = express();

// MongoDB Atlas setup 
const db = config.get('mongoURI');
const Study = require('./models/Study');

// Middleware setup 
app.use(cors());
app.use(bodyParser.json()); // tells the (app) server to use bodyParser
app.use(bodyParser.urlencoded({extended: false}));

mongoose
  .connect(db, { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useFindAndModify: false 
  })
  .then( () => console.log('MongoDB Connected...') )
  .catch( err => console.log(err) );