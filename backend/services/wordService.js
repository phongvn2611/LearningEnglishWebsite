const WordModel = require('../models/wordModel');

exports.createNewWord = async (wordInfo) => {
  try {
    const newWord = await WordModel.create({ ...wordInfo });

    if (newWord) {
      return newWord;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

exports.updateWord = async (_id='',wordInfo) => {
  await WordModel.findByIdAndUpdate(_id, wordInfo,
      function(err, result) {
        if (err) {
          return null;
        } else {
          return result;
        }
      }
    );
};

exports.getIdByWord = async (word = '') => {
  try {
    var query = new RegExp( `^${word}.*`,'gi');
    const id = await WordModel.findOne({Word: query})
                  .select('-_id');   
    return id;
  } catch (error) {
    throw error;
  }
};

exports.searchWord = async (word = '') => {
  try {
    var query = new RegExp( `^${word}.*`,'gi');
    const list = await WordModel.find({word: query})
                  .select('-_id Type Word Mean Phonetic Picture');   
    return list;
  } catch (error) {
    throw error;
  }
};

exports.getAllWords = async () => {
  try {
    const list = await WordModel.find({})
                  .select('-_id Type Word Mean Phonetic Picture');   
    return list;
  } catch (error) {
    throw error;
  }
};

exports.getWordDetail = async (_id = '') => {
  try {
    const res = await WordModel.findById(_id );

    return res;
  } catch (error) {
    throw error;
  }
};

exports.deleteWord = async (_id = '') => {
  try {
    const res = await WordModel.findByIdAndDelete(_id );
    if (res) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};


exports.getFavoriteList = async (rawFavorites = []) => {
  try {
    if (!Array.isArray(rawFavorites) || rawFavorites.length === 0) {
      return [];
    }

    let list = [];
    for (let word of rawFavorites) {
      const regex = new RegExp(`^${word}.*`, 'gi');
      const wordDetails = await WordModel.findOne({ Word: regex })
      .select('-_id type word mean phonetic picture',
      );
      if (wordDetails) {
        list.push(wordDetails);
      }
    }

    return list;
  } catch (error) {
    throw error;
  }
};

exports.getWordByTopic = async (topic) => {
  try {
     // var query = new RegExp( `^${topic}.*`,'gi');
      const list = await WordModel.find({Topics: topic}); 
      if(list.length == 0){
        return null;
      } 
    return list;
  } catch (error) {
    throw error;
  }
};

exports.getWordTopics = async () => {
  try {
      const list = await WordModel.distinct('Topics');
      if(list.length == 0){
        return null;
      }
    return list;
  } catch (error) {
    throw error;
  }
};

