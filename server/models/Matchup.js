const { Schema, model } = require('mongoose');

const matchupSchema = new Schema({
  tech1: {
    type: String,
    required: true,
  },
  tech2: {
    type: String,
    required: true,
  },
});

const Matchup = model('Matchup', matchupSchema);

module.exports = Matchup;
