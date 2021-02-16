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

