const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GrammarModel = new Schema({
  Title: {
    type: String,
    required: true,
  },

  Content: {
    type: String,
    required: true,
  },

  Video: {
    type: String,
    trim: true,
    default: null,
  },
  
  Audio: {
    type: String,
    trim: true,
    default: null,
  },

  Image: {
    type: String,
    trim: true,
    default: null,
  },

  Script: {
    type: String,
    default: null,
  },

  Level: {
    type: String,
    enum: ['0','1','2', '3'],
    default: '0',
  },

  Items:[{ type: Schema.Types.Map}]
});

module.exports = mongoose.model('Grammar', GrammarModel);
