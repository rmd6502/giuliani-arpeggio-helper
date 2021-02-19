// Study Schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudySchema = new Schema({
    path: {
      type: String,
      required: true
    },
    fingers: {
      type: String
    },
    rhythm: {
      type: String
    },
    texture: {
      type: String
    },
    difficulty: {
      type: String 
    }
});

module.exports = Item = mongoose.model('Study', StudySchema);