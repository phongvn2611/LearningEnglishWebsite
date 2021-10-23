const QuestionModel = require('../models/Quizzes/question.model');

exports.createQuestion = async (questionInfo ) => {
  try {
    const newQuestion = await QuestionModel.create({ ...questionInfo});

    if (newQuestion) {
      return newQuestion;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

exports.updateQuestion = async (_id='', questionInfo ) => {
    await QuestionModel.findByIdAndUpdate(_id, { ...questionInfo},
        function(err, result) {
        if (err) {
          return null;
        } else {
          return result;
        }
      }
    );
};

exports.getQuestionById = async (questionId = '') => {
    try {
      const res = await QuestionModel.findOne({questionId: questionId}).populate('answers');   
      return res;
    } catch (error) {
      throw error;
    }
  };


  exports.getQuestionByQuizId = async (quizId = '') => {
    try {
      const res = await QuestionModel.find({quizId: quizId}).populate('answers');  
      return res;
    } catch (error) {
      throw error;
    }
  };

 //delete by quizid
 exports.deleteQuestionById = async (_id = '') => {
    try {
      const res = await QuestionModel.findByIdAndDelete(_id );
      if (res) {
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
  };
  
   //delete by listenid
   exports.deleteQuestionByQuizId = async (quizId = '') => {
      try {
        const res = await QuestionModel.deleteMany({quiId: quizId});
        if (res) {
          return true;
        }
        return false;
      } catch (error) {
        throw error;
      }
    };
