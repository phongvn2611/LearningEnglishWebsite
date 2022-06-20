const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const QuestionTest = require('./test/questionTestModel.model');

const FileTestModel = new Schema({
  Content: {
    type: String,
    default: null
  },

  Part: {
    type: Number,
    required: true
  },

  Image: {
    type: String
  },

  Audio: {
    type: String
  },

  TestId: {
    type: Schema.Types.ObjectId,
    ref: 'test'
  },

  // QuestionTests:[{
  //   type: Schema.Types.Map
  // }]
});

module.exports = mongoose.model('fileTest', FileTestModel);
