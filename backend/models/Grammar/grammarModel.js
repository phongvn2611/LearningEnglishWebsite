const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const grammarModel = new Schema({
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

  items:[{ type: Schema.Types.Map, ref: 'grammar_item' }]
});

module.exports = mongoose.model('grammar', grammarModel);
