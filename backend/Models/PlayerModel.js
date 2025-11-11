const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['crewmate', 'imposter'],
    required: true
  },
  tasksSolved: {
    type: Number,
    default: 0
  },
  lastSolveTime: {
    type: Date, // used to track the 5-min cooldown
    default: null
  }
});

module.exports = mongoose.model('Player', playerSchema);
