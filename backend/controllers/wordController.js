const {
  isExistWord,
  uploadImage,
  getWordPack,
} = require('../services/commonService');

const {
  getAllWords,
  createNewWord,
  updateWord,
  deleteWord,
  searchWord,
  getWordDetail,
  getFavoriteList,
  getWordByTopic,
  getWordTopics,
} = require('../services/wordService');

// const {
//   deleteFavoriteListOfUsers,
// } = require('../services/user.service');

//create word
exports.postContributeWord = async (req, res, next) => {
  try {
    const { Picture, Word, Type, ...rest } = req.body;

    // check existence of word
    const isExist = await isExistWord(Word, Type);
    if (isExist) {
      return res
        .status(409)
        .json({ message: `"${Word} (${Type})" has been existed.` });
    }

    // upload description picture if available
    let pictureUrl = null;
    if (Picture) {
      pictureUrl = await uploadImage(Picture, 'dynonary/words');
    }

    // create the new word
    const word = await createNewWord({
      Word,
      Type,
      Picture: pictureUrl,
      ...rest,
    });

    if (word !=null) {
      return res.status(200).json({word });
    }
    return res.status(503).json({ message: 'Error, can not create word.' });
  } catch (error) {
    console.error('POST CONTRIBUTE WORD ERROR: ', error);
    return res.status(503).json({ message: 'Error, can not create word.' });
  }
};

//update word
exports.putContributeWord = async (req, res, next) => {
  try {
    const { Picture, Word, Type, ...rest } = req.body;
     
    // check existence of word
    const isExist = await isExistWord(Word, Type);
    if (isExist) {
      return res
        .status(409)
        .json({ message: `"${Word} (${Type})" has been existed.` });
    }

    // upload description picture if available
    let pictureUrl = null;
    if (Picture) {
      pictureUrl = await uploadImage(Picture, 'dynonary/words');
    }

    // update the new word
    const word = await updateWord(req.params.id, {       
      Picture: pictureUrl,
      ...rest,
    });

    if (word !=null) {
      return res.status(200).json({word });
    }
    return res.status(503).json({ message: 'Error, can not update word.' });
  } catch (error) {
    console.error('POST CONTRIBUTE WORD ERROR: ', error);
    return res.status(503).json({ message: 'Error, can not update word.' });
  }
};

//check word exist
exports.getCheckWordExistence = async (req, res) => {
  try {
    const { Word, Type } = req.query;
    const word = await isExistWord(Word, Type);
    return res.status(200).json({ word });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(204).json({ isExist: false });
  }
};

//get the packet of word
exports.getWordPack = async (req, res) => {
  try {
    const { page, perPage, packInfo, sortType } = req.query;

    const pageInt = parseInt(page),
      perPageInt = parseInt(perPage);
    const skip = (pageInt - 1) * perPageInt;

    const packList = await getWordPack(
      JSON.parse(packInfo),
      skip,
      perPageInt,
      '-_id type word mean phonetic picture',
      sortType === 'asc' ? '1' : sortType === 'desc' ? '-1' : null,
      null,
    );

    return res.status(200).json({ packList });
  } catch (error) {
    console.error('WORD GET WORD PACK ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

//search word
exports.getSearchWord = async (req, res) => {
  try {
    const { word, isCompact = false } = req.query;
    const list = await searchWord(
      word,
      20,
      isCompact == 'true'
        ? '-_id word'
        : '-_id type word mean phonetic picture',
    );
    return res.status(200).json({ packList: list });
  } catch (error) {
    console.error('GET SEARCH WORD ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

//get the details of word
exports.getWordDetails = async (req, res, next) => {
  try {
    const { word } = req.query;
    const wordDetail = await getWordDetail(word);
    if (wordDetail) {
      return res.status(200).json(wordDetail);
    }
  } catch (error) {
    console.error('GET WORD DETAILS ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

//get the Favorite words of user
exports.getUserFavoriteList = async (req, res, next) => {
  try {
    const { user } = req;
    if (!user || !user.FavoriteList) {
      return res.status(400).json({ message: 'failed' });
    }

    const { FavoriteList } = user;
    if (!Array.isArray(FavoriteList) || FavoriteList.length === 0) {
      return res.status(200).json({ list: [] });
    }

    let { page, perPage, sortType } = req.query;
    page = parseInt(page);
    perPage = parseInt(perPage);

    let favoriteSorted = [...FavoriteList];
    if (sortType === 'asc') {
      favoriteSorted.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
    } else if (sortType === 'desc') {
      favoriteSorted.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
    }
    favoriteSorted = favoriteSorted.slice((page - 1) * perPage, page * perPage);

    const packList = await getFavoriteList(favoriteSorted);

    return res.status(200).json({ packList });
  } catch (error) {
    console.error(' ERROR: ', error);
    return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

 //get all of words
 exports.getAllWords = async (req, res) => {
  try {
    const words = await getAllWords();
    return res.status(200).json({words });
  } catch (error) {
    console.error('GET SEARCH WORD ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

//delete word
exports.deleteWord = async (req, res) => {
  try {
    const { wordId } = req.params.id;

    //get word
   // const word = await getWordById(wordId);

    //remove word from user' favorite list
    // const isDeleteFavoriteWordOfUser= await deleteFavoriteListOfUsers(word);

    // if(!isDeleteFavoriteWordOfUser)
    // {
    //   return res.status(400).json({ message: 'Error, Can not delete this word.' });
    // }

    //delete word
    const isDeleteWord = await deleteWord(wordId);
    if (isDeleteWord) {
      return res.status(200).json({ message: 'Delete successfully.' });
    }
  } catch (error) {
    console.error('GET WORD DETAILS ERROR: ', error);
    return res.status(503).json({ message: 'Eror, can not delete this word' });
  }
};

//get by topic
exports.getByTopic = async (req, res) => {
  try {
    const Topic = req.params.topic;  
    const words = await getWordByTopic(Topic);
    if(words == null ){
      return res.status(204).json({ message: 'No result.'});
      }
    return res.status(200).json({words });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'ERROR, can not get listening' });
  }
};

//get topics
exports.getTopics = async (req, res) => {
  try {
    const topics = await getWordTopics();
    return res.status(200).json({topics });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

