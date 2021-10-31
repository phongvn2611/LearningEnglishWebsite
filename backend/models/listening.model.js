const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ListeningModel = new Schema({
  createDate: {
    type: Date,
    required: true,
    default: new Date(),
  },

  name: {
    type: String,
    required: true,
    maxlength:100,
  },

  topic: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  quizId: {
    type: Schema.Types.ObjectId,
    ref: 'quizs',
    default: null,
  },

  ipaId: {
    type: Schema.Types.ObjectId,
    ref: 'ipa',
    default: null,
  },

  video: {
    type: String,
    trim: true,
    default: null,
  },

  script: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model('listening', ListeningModel);
