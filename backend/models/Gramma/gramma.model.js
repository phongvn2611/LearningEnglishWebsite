const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GrammaModel = new Schema({
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

  items:[{ type: Schema.Types.Map, ref: 'gramma_item' }]
});

module.exports = mongoose.model('gramma', GrammaModel);
