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
app.use(bodyParser.urlencoded( {extended: false} ));

// Connect to database 
mongoose
  .connect(db, { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useFindAndModify: false 
  })
  .then( () => console.log('\nMongoDB Connected...') )
  .catch( err => console.log(err) );


// Get all studies 
app.get('/get-all-studies', (req, res) => {
  Study.find()
    .then( items => console.log( res.json(items) ));
});

// Get study by id 
app.get('/get-studies-by-id/:id', (req, res) => {
  let id = req.params.id;
  Study.findById(id, (err, data) => {
    res.json(data);
  })
});

// Get randomized studies by difficulty
//
// The request object will carry two paramaters, the level of difficulty,
// and how many studies the user wants
app.get('/get-randomized-studies-by-difficulty', (req, res) => {

})

// Get randomzied studies from all 120 
// The request object will carry just the number of studies the user wants.
app.get('/get-randomized-studies-all', (req, res) => {

})


// TODO: find a way to hide these endpoints behind a login 
// or implement some form of security for thse endpoints: 

// Create (POST)
app.post('/add-study', (req, res) => {
  const newStudy = new Study({
    studyNum: req.body.studyNum,
    studyPath: req.body.studyPath,
    difficulty: req.body.difficulty
  })
  newStudy
    .save()
    .then( item => res.json(item) )
    .catch( err => res.status(500).json( { success: false} ));
});

// Delete
app.delete('/delete-study-by-id/:id', (req, res) => {
  Study.findOneAndDelete( { _id: req.params.id })
    .then(() => res.json( { success: true }) )
    .catch(err => res.status(404).json( { success: false } ));
})

// Update (PUT)
app.put('/update-study-by-id/:id', (req, res) => {
  Study.findOneAndUpdate( { _id: req.params.id } , req.body )
    .then(() => res.json( { success: true } ))
    .catch(err => res.status(404).json( { success: false} ));
})


app.listen( port, () => 
  console.log(`\nServer started on port: http://localhost:${port}\n`)
)

