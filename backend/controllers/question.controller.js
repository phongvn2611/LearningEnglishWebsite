const {
    getQuizById,
  } = require('../services/quiz.service');

  const {
    createQuestion,
    getQuestionById,
    getQuestionByQuizId,
    deleteQuestionById,
    deleteQuestionByQuizId,
  } = require('../services/question.service');

  
  //create question
  exports.postQuestion = async (req, res) => {
    try {
      const quizId= req.params.quizId;
      
      //check if quiz existed
      const quiz = await getQuizById(quizId);
      if(!quiz) {
      return res.status(400).json({ message: 'Error, Not found quiz.' });
      }
  
      // create question
      const {content, answers} = req.body;
      const newQuestion = await createQuestion({quizId, content, answers });
  
      if (newQuestion) {
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

      if(!QuestionExist) {
        return res.status(400).json({ message: 'Error, Not found question.' });
      }
        // delete question
      const isDeleted = await deleteQuestionById(questionId);
      if(!isDeleted){
        return res.status(400).json({ message: 'Error, can not update question.' });
      }

      // create question
      const {content, answers} = req.body;
      const quizId = QuestionExist.quizId;
      const newQuestion = await createQuestion({quizId, content, answers });
  
      if (newQuestion) {
        return res.status(200).json({newQuestion });
      }
      return res.status(503).json({ message: 'Error, can not update question.' });return res.status(503).json({ message: 'Error, can not update question.' });
    } catch (error) {
      console.error('PUT ERROR: ', error);
      return res.status(503).json({ message: 'Error, can not update question.' });
    }
  };

  //get by Id
  exports.getById = async (req, res) => {
    try {
      const question = await getQuestionById(req.params.questionId);
      return res.status(200).json({question });
    } catch (error) {
      console.error('ERROR: ', error);
      return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
    }
  };

  //get by QuizId
  exports.getByQuizId = async (req, res) => {
    try {
        const quizId= req.params.quizId;
      
      //check if quiz existed
      const quiz = await getQuizById(quizId);
      if(!quiz) {
      return res.status(400).json({ message: 'Error, Not found quiz.' });
      }

      //get question of
      const questions = await getQuestionByQuizId(quizId);
      return res.status(200).json({questions });
    } catch (error) {
      console.error('ERROR: ', error);
      return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
    }
  };

  //delete by questionid
  exports.deleteById = async (req, res) => {
    try {
      const isDelete = await deleteQuestionById(req.params.id);
      if (isDelete) {
        return res.status(200).json({ message: 'Delete successfully.' });
      }
    } catch (error) {
      console.error('DELETE ERROR: ', error);
      return res.status(503).json({ message: 'Eror, can not delete this question' });
    }
  };

  //delete by quizid
  exports.deleteByQuizId = async (req, res) => {
    try {
      const isDelete = await deleteQuestionByQuizId(req.params.quizId);
      if (isDelete) {
        return res.status(200).json({ message: 'Delete successfully.' });
      }
    } catch (error) {
      console.error('GET WORD DETAILS ERROR: ', error);
      return res.status(503).json({ message: 'Eror, can not delete this question' });
    }
  };
  
  