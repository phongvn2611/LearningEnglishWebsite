const {
  createGrammar,
  getGrammarByListeningId,
  getGrammarById,
  deleteGrammarById,
  deleteGrammarByListenId,
  getGrammarLevels,
  getGrammarByLevel
} = require('../services/grammarService');
const {
  getListenById,
  updateListen,
} = require('../services/listeningService');

//create grammar
exports.postGrammar = async (req, res) => {
  try {

    const {Title, ListeningId, Content,Level, Items}= req.body;
    const newGrammar = await createGrammar({Title, ListeningId, Content,Level, Items});
    if (newGrammar) {
      return res.status(201).json({data: newGrammar });
    }
    return res.status(503).json({ message: 'Error, can not create gramma.' });
  } catch (error) {
    console.error('POST ERROR: ', error);
    return res.status(503).json({ message: 'Error, can not create gramma.' });
  }
};

//update grammar
exports.putGrammar = async (req, res) => {
  try {

      //check if grammar existed
    const grammarId = req.params.grammarId;
    const GrammarExist = await getGrammarById(grammarId);

    if(!GrammarExist) {
      return res.status(400).json({ message: 'Error, Not found grammar.' });
    }
      // delete grammar
    const isDeleted = await deleteGrammarById(grammaId);
    if(!isDeleted){
      return res.status(400).json({ message: 'Error, can not update grammar.' });
    }

    // create grammar
    const {Title, Content,Level, Items} = req.body;
    const ListeningId = GrammarExist.ListeningId;
    const newGrammar = await createGrammar({Title, ListeningId, Content,Level, Items});

    if (newGrammar) {
      return res.status(201).json({data: newGrammar });
    }
    return res.status(503).json({ message: 'Error, can not update grammar.' });return res.status(503).json({ message: 'Error, can not update question.' });
  } catch (error) {
    console.error('PUT ERROR: ', error);
    return res.status(503).json({ message: 'Error, can not update grammar.' });
  }
};


//get grammar by id
exports.getById = async (req, res) => {
  try {
    const grammarDetail = await getGrammarById(req.params.id);
    if (grammarDetail) {
      return res.status(200).json(grammarDetail);
    }
  } catch (error) {
    console.error('GET DETAILS ERROR: ', error);
    return res.status(503).json({ message: error });
  }
};

//get levels
exports.getLevels = async (req, res) => {
  try {
    const list = await getGrammarLevels();
    if(list == null ){
      return res.status(204).json({ message: 'No result.'});
      }
    return res.status(200).json({list });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

//get by level
exports.getByLevel = async (req, res) => {
  try {
    const Level = req.params.level;  
    const list = await getGrammarByLevel(Level);
    if(list == null ){
      return res.status(204).json({ message: 'No result.'});
      }
    return res.status(200).json({list });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'ERROR, can not get grammar' });
  }
};


//delete by id
exports.deleteById = async (req, res) => {
  try {
    const { id } = req.params.id;
    const isDelete = await deleteGrammarById(id);
    if (isDelete) {
      return res.status(200).json({ message: 'Delete successfully.' });
    }
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Eror, can not delete this grammar' });
  }
};


