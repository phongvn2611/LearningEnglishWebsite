const QuizModel = require('../models/Quizzes/quiz.model');

exports.createQuiz = async (quiz) => {
  try {
    const newQuiz = await QuizModel.create({ ...quiz });

    if (newQuiz) {
      return newQuiz;
    }
    return null;
  } catch (error) {
    throw error;
  }
};


exports.getQuizByListeningId = async (listenId = '') => {
    try {
      const res = await QuizModel.findOne({listenId: listenId})
                                .populate('questions');
      return res;
    } catch (error) {
      throw error;
    }
  };

  exports.getQuizById = async (_id = '') => {
    try {
      const res = await QuizModel.findById(_id)
                                .populate('questions');
      return res;
    } catch (error) {
      throw error;
    }
  };

  //delete by quizid
exports.deleteQuizById = async (_id = '') => {
  try {
    const res = await QuizModel.findByIdAndDelete(_id );
    if (res) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};

 //delete by listenid
 exports.deleteQuizByListenId = async (listenId = '') => {
    try {
      const res = await QuizModel.deleteOne({listenId:listenId} );
      if (res) {
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
  };
  