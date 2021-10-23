const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubmitQuizModel = new Schema({
  core: {
    type: Number,
    default: 0,
  },

  comment: {
    type: String,
    maxlength: 200,
  },

  startTime: {
    type: Date,
  },

  finishTime: {
    type: Date,
  },

  isFinish: {
    type: Date,
  },

  quizId: {
    type: Schema.Types.ObjectId,
    ref: 'quiz',
    required: true,
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },

 answer: [{ type: Schema.Types.ObjectId, ref: 'answer' }]
});

module.exports = mongoose.model('submitquiz', SubmitQuizModel);
