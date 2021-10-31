const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GrammarItemsModel = new Schema({
  content: {
    type: String,
    required: true,
  },

  example: {
    type: String,
  },

  grammarId: {
    type: Schema.Types.ObjectId,
    ref: 'grammar',
    default: null,
  },
});

module.exports = mongoose.model('grammar_item', GrammarItemsModel);
