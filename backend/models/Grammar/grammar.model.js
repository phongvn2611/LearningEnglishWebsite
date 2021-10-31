const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GrammarModel = new Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  listeningId: {
    type: Schema.Types.ObjectId,
    ref: 'listening',
    default: null,
  },

  level: {
    type: String,
    enum: ['1','2', '3'],
    default: '0',
  },

  items:[{ type: Schema.Types.Map, ref: 'grammar_item' }]
});

module.exports = mongoose.model('grammar', GrammarModel);
