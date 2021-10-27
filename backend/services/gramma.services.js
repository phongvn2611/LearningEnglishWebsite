const GrammaModel = require('../models/Gramma/gramma.model');

exports.createGramma = async (grammaInfo ) => {
  try {
    const newGramma = await GrammaModel.create({ ...grammaInfo});

    if (newGramma) {
      return newGramma;
    }
    return null;
  } catch (error) {
    throw error;
  }
};


exports.getGrammaById = async (id = '') => {
    try {
      const res = await GrammaModel.findById(id).populate('answers');   
      return res;
    } catch (error) {
      throw error;
    }
  };


  exports.getGrammaByListenId = async (listenId = '') => {
    try {
      const res = await GrammaModel.find({listenId: listenId}).populate('gramma_item');  
      return res;
    } catch (error) {
      throw error;
    }
  };

 //delete by id
 exports.deleteGrammaById = async (id = '') => {
    try {
      const res = await GrammaModel.findByIdAndDelete(id );
      if (res) {
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
  };
  
   //delete by listenid
   exports.deleteGrammaByListenId = async (listenId = '') => {
      try {
        const res = await GrammaModel.deleteOne({listeningId: listenId});
        if (res) {
          return true;
        }
        return false;
      } catch (error) {
        throw error;
      }
    };
