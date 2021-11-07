const mongoose = require('mongoose');
const { NUM_OF_SPECIALTY, NUM_OF_TOPICS } = require('../constants');
const Schema = mongoose.Schema;

const WordModel = new Schema({
  Word: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },

  Mean: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100,
  },

  Type: {
    type: String,
    required: true,
    enum: ['', 'n', 'adj', 'adv', 'v', 'con', 'pre', 'pro', 'det'],
    default: '',
  },

  Level: {
    type: String,
    required: true,
    enum: ['0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    default: '0',
  },

  Phonetic: {
    type: String,
    trim: true,
    maxLength: 50,
    default: '',
  },

  Examples: [
    {
      type: String,
      maxLength: 200,
    },
  ],

  // link picture source
  Picture: {
    type: String,
    trim: true,
    default: null,
  },

  Specialty: {
    type: String,
    enum: Array.from({ length: NUM_OF_SPECIALTY }, (_, key) => key.toString()),
    default: '0',
  },

  Topics: [
    {
      type: String,
      enum: Array.from({ length: NUM_OF_TOPICS }, (_, key) => key.toString()),
    },
  ],

  Synonyms: [{ type: String, maxLength: 50 }],

  Antonyms: [{ type: String, maxLength: 50 }],

  Note: {
    type: String,
    trim: true,
    maxLength: 150,
  },

  AudioSrc: {
    type: String,
    default: null,
  },

  IsChecked: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Word', WordModel);
