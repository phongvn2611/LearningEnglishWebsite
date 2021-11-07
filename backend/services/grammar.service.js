const GrammarModel = require('../models/Grammar/grammar.model');

exports.createGrammar = async (grammarInfo ) => {
  try {
    const newGrammar = await GrammarModel.create({ ...grammarInfo});

    if (newGrammar) {
      return newGrammar;
    }
    return null;
  } catch (error) {
    throw error;
  }
};


exports.getGrammarById = async (id = '') => {
    try {
      const res = await GrammarModel.findById(id).populate('items');   
      return res;
    } catch (error) {
      throw error;
    }
  };


  exports.getGrammarByListenId = async (listenId = '') => {
    try {
      const res = await GrammarModel.find({ListeningId: listenId}).populate('items');  
      return res;
    } catch (error) {
      throw error;
    }
  };

 //delete by id
 exports.deleteGrammarById = async (id = '') => {
    try {
      const res = await GrammarModel.findByIdAndDelete(id );
      if (res) {
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
  };
  
   //delete by listenid
   exports.deleteGrammarByListenId = async (listenId = '') => {
      try {
        const res = await GrammarModel.deleteOne({ListeningId: listenId});
        if (res) {
          return true;
        }
        return false;
      } catch (error) {
        throw error;
      }
    };
