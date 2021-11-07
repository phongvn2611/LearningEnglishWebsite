const {
  createQuiz,
  getQuizByListeningId,
  getQuizById,
  deleteQuizById,
  deleteQuizByListenId,
} = require('../services/quizService');
const {
  getListenById,
  updateListen,
} = require('../services/listeningService');


//create quiz
exports.postQuiz = async (req, res) => {
  try {
    const listeningId= req.params.listenId;

     //check if lisning existed
     const listen = await getListenById(listeningId);
     if(!listen) {
     return res.status(400).json({ message: 'Error, Not found listening.' });
     }
 
    // create gramma
    const newQuiz = await createQuiz({listeningId });

    if (newQuiz) {
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
exports.deleteByListenId = async (req, res, next) => {
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

