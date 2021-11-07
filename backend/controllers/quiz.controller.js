const {
    createQuiz,
    getQuizByListeningId,
    getQuizById,
    deleteQuizById,
    deleteQuizByListenId,
  } = require('../services/quiz.service');
  const {
    getListenById,
    updateListen,
  } = require('../services/listening.service');

  
  //create quiz
  exports.postQuiz = async (req, res) => {
    try {
      const ListeningId= req.params.listenId;
  
       //check if quiz existed
       const listen = await getListenById(ListeningId);
       if(!listen) {
       return res.status(400).json({ message: 'Error, Not found quiz.' });
       }
   
      // create quiz
      const newQuiz = await createQuiz({ListeningId });
  
      if (newQuiz) {

          //update listen
       // const { Name, Topic, Video, Script, Description, CreateDate} = listen;
       // const quizId = newQuiz._id;
      //  await updateListen(listeningId, {quizId});
            //return quiz
        return res.status(200).json({data: newQuiz });
      }
      return res.status(503).json({ message: 'Error, can not create quiz.' });
    } catch (error) {
      console.error('POST CONTRIBUTE WORD ERROR: ', error);
      return res.status(503).json({ message: 'Error, can not create quiz.' });
    }
  };

  //get quiz by quizId
  exports.getById = async (req, res) => {
    try {
      const quizDetail = await getQuizById(req.params.id);
      if (quizDetail) {
        return res.status(200).json(quizDetail);
      }
    } catch (error) {
      console.error('GETDETAILS ERROR: ', error);
      return res.status(503).json({ message: error });
    }
  };


  //get quiz by listeningId
  exports.getByLiteningId = async (req, res) => {
    try {
      const listenId = req.params.listenId;  
      const quiz = await getQuizByListeningId(listenId);
      return res.status(200).json({quiz });
    } catch (error) {
      console.error('ERROR: ', error);
      return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
    }
  };

  //delete by quizid
  exports.deleteById = async (req, res) => {
    try {
      const { id } = req.params.id;
      const isDelete = await deleteQuizById(id);
      if (isDelete) {
        return res.status(200).json({ message: 'Delete successfully.' });
      }
    } catch (error) {
      console.error('GET WORD DETAILS ERROR: ', error);
      return res.status(503).json({ message: 'Eror, can not delete this listening' });
    }
  };

  //delete by listenid
  exports.deleteByListenId = async (req, res) => {
    try {
      const { listenId } = req.params.listenId;
      const isDelete = await deleteQuizByListenId(listenId);
      if (isDelete) {
        return res.status(200).json({ message: 'Delete successfully.' });
      }
    } catch (error) {
      console.error('GET WORD DETAILS ERROR: ', error);
      return res.status(503).json({ message: 'Eror, can not delete this listening' });
    }
  };
  
  