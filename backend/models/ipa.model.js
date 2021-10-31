const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IPAModel = new Schema({
    audioSrc: {
    type: String,
    default: null,
  },

  mouthShape: {
    type: String,
    default: null,
  },

  desc: {
    type: String,
    required: true,
    enum: ['Unvoiced sound', 'Voiced sound'],
  },

  examples:
    [{ type: Schema.Types.Map, ref: 'word' }],

  phonetic: {
    type: String,
    trim: true,
    maxLength: 50,
    default: '',
  },

  listeningId: {
    type: Schema.Types.ObjectId,
    ref: 'listening',
    default: null,
  },

});

module.exports = mongoose.model('ipa', IPAModel);
