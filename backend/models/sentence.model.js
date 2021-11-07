const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SentenceSchema = new Schema({
  Sentence: {
    type: String,
    required: true,
    trim: true,
    maxLength: 200,
  },

  Mean: {
    type: String,
    required: true,
    trim: true,
    maxLength: 300,
  },

  Note: {
    type: String,
    trim: true,
    maxLength: 100,
  },

  Topics: [String],

  IsChecked: {
    type: Boolean,
    required: true,
    default: false,
  },

  AudioSrc: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model('Sentence', SentenceSchema);

