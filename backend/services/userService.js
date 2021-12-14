const UserModel = require('../models/userModel');
const { ACCOUNT_TYPES, MAX } = require('../constants');

exports.updateUserCoin = async (newCoin = 0, id = '') => {
    try {
      if (
        newCoin < 0 ||
        newCoin > MAX.USER_COIN ||
        !username ||
        username === ''
      ) {
        return false;
      }
  
      const updateRes = await UserModel.findByIdAndUpdate(
          id,
        { coin: newCoin },
      );
  
      if (updateRes.ok) {
        return true;
      }
    } catch (error) {
      throw error;
    }
  };