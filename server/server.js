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
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

// Initialize database 
mongoose
  .connect(db, { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useFindAndModify: false 
  })
  .then( () => console.log('\nMongoDB Connected...') )
  .catch( err => console.log(err) );

// Create (POST)
app.post('/', (req, res) => {
  const newStudy = new Study({
    studyPath: req.body.studyPath,
    difficulty: req.body.difficulty
  })
  newStudy
    .save()
    .then(item => res.json(item))
    .catch(err => res.status(500).json({ success: false}));
});

// Read (GET)
app.get('/', (req, res) => {
  Study.find()
    .then(items => console.log(res.json(items)));
});

// Read by id (GET)
app.get('/id:', (req, res) => {
  let id = req.params.id;
  Study.findById(id, (err, data) => {
    res.json(data);
  })
});

// Delete
app.delete('/', (req, res) => {

})

// Update (PUT)
app.put('/', (req, res) => {

})

app.listen( port, () => 
  console.log(`\nServer started on port: http://localhost:${port}\n`)
)

