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

    //get grammar by level
    exports.getGrammarByLevel = async (level) => {
      try {
         // var query = new RegExp( `^${topic}.*`,'gi');
          const list = await GrammarModel.find({Level: level});
          if(list.length == 0){
            return null;
          }
        return list;
      } catch (error) {
        throw error;
      }
    };

    //get levels
    exports.getGrammarLevels = async () => {
      try {
          const list = await GrammarModel.distinct('Level');
          if(list.length == 0){
            return null;
          }
        return list;
      } catch (error) {
        throw error;
      }
    };

    //get all
    exports.getAllGrammars = async () => {
      try {
        const list = await GrammarModel.find({});                   
        return list;
      } catch (error) {
        throw error;
      }
    };
  
  
