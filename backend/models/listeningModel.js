const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const listeningModel = new Schema({
  createDate: {
    type: Date,
    required: true,
    default: new Date(),
  },

  name: {
    type: String,
    required: true,
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
    ref: 'quiz',
    default: null,
  },

  grammarId: {
    type: Schema.Types.ObjectId,
    ref: 'grammar',
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

module.exports = mongoose.model('listening', listeningModel);
