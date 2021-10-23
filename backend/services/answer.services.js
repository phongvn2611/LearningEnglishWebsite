const AnswerModel = require('../models/Quizzes/answer.model');

exports.createAnswer = async (answerInfo ) => {
  try {
    const newAnswer = await AnswerModel.create({ ...answerInfo});

    if (newAnswer) {
      return newAnswer;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

exports.updateQuestion = async (_id='', questionInfo ) => {
  try {
    const Question = await QuestionModel.findByIdAndUpdate(_id, { ...quesInfo});

    if (Question) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
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
