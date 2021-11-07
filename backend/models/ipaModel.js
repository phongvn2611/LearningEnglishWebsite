const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IPAModel = new Schema({
    AudioSrc: {
    type: String,
    default: null,
  },

  MouthShape: {
    type: String,
    default: null,
  },

  Desc: {
    type: String,
    required: true,
    enum: ['Unvoiced sound', 'Voiced sound'],
  },

  Examples:
    [{ type: Schema.Types.Map, ref: 'word' }],

  Phonetic: {
    type: String,
    trim: true,
    maxLength: 50,
    default: '',
  },

  ListeningId: {
    type: Schema.Types.ObjectId,
    ref: 'Listening',
    default: null,
  },

});

module.exports = mongoose.model('IPA', IPAModel);
