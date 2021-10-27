const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GrammaItemsModel = new Schema({
  content: {
    type: String,
    required: true,
  },

  example: {
    type: String,
  },

  grammaId: {
    type: Schema.Types.ObjectId,
    ref: 'gramma',
    default: null,
  },
});

module.exports = mongoose.model('gramma_item', GrammaItemsModel);
