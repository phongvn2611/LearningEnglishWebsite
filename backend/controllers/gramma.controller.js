const {
    createGramma,
    updateGramma,
    getGrammaByListeningId,
    getGrammaById,
    deleteGrammaById,
    deleteGrammaByListenId,
  } = require('../services/quiz.service');
  const {
    getListenById,
    updateListen,
  } = require('../services/listening.service');

  
  //create gramma
  exports.postGramma = async (req, res) => {
    try {
      const listeningId= req.params.listenId;
  
       //check if listening existed
       const listen = await getListenById(listeningId);
       if(!listen) {
       return res.status(400).json({ message: 'Error, Not found listening.' });
       }
   
      // create gramma
      const newGramma = await createGramma({listeningId });
  
      if (newGramma) {
        return res.status(201).json({data: newGramma });
      }
      return res.status(503).json({ message: 'Error, can not create gramma.' });
    } catch (error) {
      console.error('POST ERROR: ', error);
      return res.status(503).json({ message: 'Error, can not create gramma.' });
    }
  };

  //update gramma
  exports.putGramma = async (req, res) => {
    try {

        //check if gramma existed
      const grammaId = req.params.grammaId;
      const GrammaExist = await getGrammaById(grammaId);

      if(!GrammaExist) {
        return res.status(400).json({ message: 'Error, Not found gramma.' });
      }
        // delete gramma
      const isDeleted = await deleteGrammaById(grammaId);
      if(!isDeleted){
        return res.status(400).json({ message: 'Error, can not update gramma.' });
      }

      // create gramma
      const {title, content, items} = req.body;
      const listenId = GrammaExist.listeningId;
      const newGramma = await createGramma({listenId, title, content, items });
  
      if (newGramma) {
        return res.status(200).json({newGramma });
      }
      return res.status(503).json({ message: 'Error, can not update gramma.' });return res.status(503).json({ message: 'Error, can not update question.' });
    } catch (error) {
      console.error('PUT ERROR: ', error);
      return res.status(503).json({ message: 'Error, can not update gramma.' });
    }
  };


  //get gramma by id
  exports.getById = async (req, res) => {
    try {
      const grammaDetail = await getGrammaById(req.params.id);
      if (grammaDetail) {
        return res.status(200).json(grammaDetail);
      }
    } catch (error) {
      console.error('GET DETAILS ERROR: ', error);
      return res.status(503).json({ message: error });
    }
  };


  //get gramma by listeningId
  exports.getByLiteningId = async (req, res) => {
    try {
      const listenId = req.params.listenId;  
      const gramma = await getGrammaByListeningId(listenId);
      return res.status(200).json({gramma });
    } catch (error) {
      console.error('ERROR: ', error);
      return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
    }
  };

  //delete by id
  exports.deleteById = async (req, res) => {
    try {
      const { id } = req.params.id;
      const isDelete = await deleteGrammaById(id);
      if (isDelete) {
        return res.status(200).json({ message: 'Delete successfully.' });
      }
    } catch (error) {
      console.error('ERROR: ', error);
      return res.status(503).json({ message: 'Eror, can not delete this gramma' });
    }
  };

  //delete by listenid
  exports.deleteByListenId = async (req, res, next) => {
    try {
      const { listenId } = req.params.listenId;
      const isDelete = await deleteGrammaByListenId(listenId);
      if (isDelete) {
        return res.status(200).json({ message: 'Delete successfully.' });
      }
    } catch (error) {
      console.error('ERROR: ', error);
      return res.status(503).json({ message: 'Eror, can not delete this gramma' });
    }
  };
  
  