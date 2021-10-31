const {
    createGrammar,
    getGrammarByListeningId,
    getGrammarById,
    deleteGrammarById,
    deleteGrammarByListenId,
  } = require('../services/grammar.service');
  const {
    getListenById,
    updateListen,
  } = require('../services/listening.service');

  
  //create grammar by listeningId
  exports.postGrammarByListen = async (req, res) => {
    try {
      const listeningId= req.params.listenId;
  
       //check if listening existed
       const listen = await getListenById(listeningId);
       if(!listen) {
       return res.status(400).json({ message: 'Error, Not found listening.' });
       }

       const {title, content,level, items}= req.body;
   
      // create grammar
      const newGrammar = await createGrammar({title, listeningId, content,level, items});
  
      if (newGrammar != null) {
        return res.status(201).json({data: newGrammar });
      }
      return res.status(503).json({ message: 'Error, can not create gramma.' });
    } catch (error) {
      console.error('POST ERROR: ', error);
      return res.status(503).json({ message: 'Error, can not create gramma.' });
    }
  };

  //create grammar
  exports.postGrammar = async (req, res) => {
    try {
      const newGrammar = await createGrammar({title, listeningId, content,level, items});
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
      const {title, content, items} = req.body;
      const listenId = GrammarExist.listeningId;
      const newGrammar = await createGrammar({listenId, title, content, items });
  
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


  //get grammar by listeningId
  exports.getByLiteningId = async (req, res) => {
    try {
      const listenId = req.params.listenId;  
      const grammar = await getGrammarByListeningId(listenId);
      return res.status(200).json({grammar });
    } catch (error) {
      console.error('ERROR: ', error);
      return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
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

  //delete by listenid
  exports.deleteByListenId = async (req, res, next) => {
    try {
      const { listenId } = req.params.listenId;
      const isDelete = await deleteGrammarByListenId(listenId);
      if (isDelete) {
        return res.status(200).json({ message: 'Delete successfully.' });
      }
    } catch (error) {
      console.error('ERROR: ', error);
      return res.status(503).json({ message: 'Eror, can not delete this grammar' });
    }
  };
  
  