const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerModel = new Schema({
  content: {
    type: String,
    required: true,
  },

  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'question',
  },

  isCorrect: {
    type: Boolean,
    default:false,
  },

  submitQuiz: [{ type: Schema.Types.ObjectId, ref: 'submitquiz' }]
});

module.exports = mongoose.model('answer', AnswerModel);
