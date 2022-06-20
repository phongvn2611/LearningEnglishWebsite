const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const AnswerTest = require('./test/answerTestModel');

const SubmitTestModel = new Schema({
   Score: {
    type: Number,
    default: 0,
  },

  ListenScore: {
    type: Number,
    default: 0,
  },

  ReadScore: {
    type: Number,
    default: 0,
  },

  Comment: {
    type: String   
  },

  StartTime: {
    type: Date
  },
  
  FinishTime: {
    type: Date
  },

  IsFinish: {
    type: Boolean,
    default: false,
  },

  TestId: {
    type: Schema.Types.ObjectId,
    ref: 'test',
  },

  UserId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },

  AnswerTests: [{
    type: Schema.Types.Map
  }]
});

module.exports = mongoose.model('submitTest', SubmitTestModel);
