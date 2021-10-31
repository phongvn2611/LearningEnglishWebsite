const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SentenceSchema = new Schema({
  sentence: {
    type: String,
    required: true,
    trim: true,
    maxLength: 200,
  },

  mean: {
    type: String,
    required: true,
    trim: true,
    maxLength: 300,
  },

  note: {
    type: String,
    trim: true,
    maxLength: 100,
  },

  topics: [String],

  isChecked: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model('sentence', SentenceSchema);

