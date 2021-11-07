const QuestionModel = require('../models/Quizzes/questionModel');

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


exports.getQuestionById = async (id = '') => {
    try {
      const res = await QuestionModel.findById(id).populate('answers');   
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

 //delete by id
 exports.deleteQuestionById = async (id = '') => {
    try {
        // var hex = /[0-9A-Fa-f]{6}/g;
        // id = (hex.test(id))? ObjectId(id) : id;
      const res = await QuestionModel.findByIdAndDelete(id );
      if (res) {
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
  };
  
   //delete by quizid
   exports.deleteQuestionByQuizId = async (quizId = '') => {
      try {
        const res = await QuestionModel.deleteMany({quizId: quizId});
        if (res) {
          return true;
        }
        return false;
      } catch (error) {
        throw error;
      }
    };
