const GrammarModel = require('../models/Grammar/grammarModel');

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
      const res = await GrammarModel.findById(id).populate('answers');   
      return res;
    } catch (error) {
      throw error;
    }
  };


  exports.getGrammarByListenId = async (listenId = '') => {
    try {
      const res = await GrammarModel.find({listenId: listenId}).populate('grammar_item');  
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
        const res = await GrammarModel.deleteOne({listeningId: listenId});
        if (res) {
          return true;
        }
        return false;
      } catch (error) {
        throw error;
      }
    };
