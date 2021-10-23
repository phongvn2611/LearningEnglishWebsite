const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserAnswerModel = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },

  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'question',
    required: true,
  },

  answerId: {
    type: Schema.Types.ObjectId,
    ref: 'answer',
    required: true,
  },

  isCorrect: {
    type: Boolean,
    default:false,
  },

});

module.exports = mongoose.model('user_answer', UserAnswerModel);
