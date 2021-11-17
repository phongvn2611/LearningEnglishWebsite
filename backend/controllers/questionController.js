const {
  getQuizById,
} = require('../services/quizService');

const {
  createQuestion,
  updateQuestion,
  getQuestionById,
  getQuestionByQuizId,
  deleteQuestionById,
  deleteQuestionByQuizId,
} = require('../services/questionService');


//create question
exports.postQuestion = async (req, res) => {
  try {
    const QuizId= req.params.quizId;
    
    //check if quiz existed
    const quiz = await getQuizById(QuizId);
    if(!quiz) {
    return res.status(400).json({ message: 'Error, Not found listen.' });
    }

    // create question
    const {Content, Answers} = req.body;
    const newQuestion = await createQuestion({QuizId, Content, Answers });

    if (newQuestion != null) {
      return res.status(200).json({data: newQuestion });
    }
    return res.status(503).json({ message: 'Error, can not create question.' });
  } catch (error) {
    console.error('POST ERROR: ', error);
    return res.status(503).json({ message: 'Error, can not create question.' });
  }
};

//update question
exports.putQuestion = async (req, res) => {
  try {

      //check if question
    const questionId = req.params.questionId;
    const QuestionExist = await getQuestionById(questionId);
    if(!QuestionExist)
    {
      return res.status(400).json({message: 'Error, Not found this question.' });
    }
      // delete question
    const {Content, Answers} = req.body;
    const isDeleted = await deleteQuestionById({ questionId});
    if (!isDeleted) {
      return res.status(400).json({message: 'Error, can not update question.' });
    }

    const QuizId = QuestionExist.QuizId;
    const Question = await createQuestion({Content, Answers, QuizId});
    if (Question != null) {
      return res.status(200).json({Question });
    }
    return res.status(503).json({ message: 'Error, can not update question.' });
  } catch (error) {
    console.error('POST ERROR: ', error);
    return res.status(503).json({ message: 'Error, can not update question.' });
  }
};

//get by Id
exports.getById = async (req, res, next) => {
  try {
    const id = req.params.questionId;
    const question = await getQuestionById(id);
    return res.status(200).json({question });
  } catch (error) {
    console.log(id);
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

//get by ListenId
exports.getByListenId = async (req, res) => {
  try {
      const listenId= req.params.listenId;
    
    //check if quiz existed
    const listen = await getListenById(listenId);
    if(!listen) {
    return res.status(400).json({ message: 'Error, Not found listen.' });
    }

    //get question of
    const question = await getQuestionByListenId(listenId);
   // console.log(question)
    return res.status(200).json({question });
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

//delete by questionid
exports.deleteById = async (req, res) => {
  try {
    const { _id } = req.params.id;
    const isDelete = await deleteQuestionById(_id);
    if (isDelete) {
      return res.status(200).json({ message: 'Delete successfully.' });
    }
  } catch (error) {
    console.error('DELETE ERROR: ', error);
    return res.status(503).json({ message: 'Eror, can not delete this question' });
  }
};

//delete by listenid
exports.deleteByListenId = async (req, res) => {
  try {
    const { listenId } = req.params.listenId;
    const isDelete = await deleteQuestionByListenId(listenId);
    if (isDelete) {
      return res.status(200).json({ message: 'Delete successfully.' });
    }
  } catch (error) {
    console.error('GET WORD DETAILS ERROR: ', error);
    return res.status(503).json({ message: 'Eror, can not delete this question' });
  }
};

