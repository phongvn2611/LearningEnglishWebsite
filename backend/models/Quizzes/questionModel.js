const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const QuestionModel = new Schema({
  content: {
    type: String,
    required: true,
  },

  quizId: {
    type: Schema.Types.ObjectId,
    ref: 'quiz',
  },

  answers:[{ type: Schema.Types.Map, ref: 'answer' }]
});

module.exports = mongoose.model('question', QuestionModel);
