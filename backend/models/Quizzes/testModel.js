const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Question = require('./question.model');

const TestModel = new Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  createDate: {
    type: Date,
    required: true,
    default: new Date(),
  },

  startDate: {
    type: Date,
    required: true,
  },

  duration: {
    type: Number,
    required: true,
  },

 questions: {
    type: [Question],
  },

  video: {
    type: String,
    trim: true,
    default: null,
  },

});

module.exports = mongoose.model('test', TestModel);
