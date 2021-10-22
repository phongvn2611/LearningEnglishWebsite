const mongoose = require('mongoose');
const { ACCOUNT_TYPES, ROLE_TYPES } = require('../constants');

const accountTypeEnum = (function () {
  let list = [];
  for (let k in ACCOUNT_TYPES) {
    list.push(ACCOUNT_TYPES[k]);
  }
  return list;
})();

const roleTypeEnum = (function () {
  let list = [];
  for (let k in ROLE_TYPES) {
    list.push(ROLE_TYPES[k]);
  }
  return list;
})();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/phongvn2611/image/upload/v1634179173/avatar/avatar-default_tx5lsb.png'
  },
  authType: {
    type: String,
    enum: accountTypeEnum,
    default: ACCOUNT_TYPES.LOCAL,
  },
  roleType: {
    type: String,
    enum: roleTypeEnum,
    default: ROLE_TYPES.USER,
  },
  isLocked: {
    type: Number,
    default: 0
  },
  favoriteList: [String]
}, {
  timestamps: true
})

module.exports = mongoose.model('users', userSchema);
