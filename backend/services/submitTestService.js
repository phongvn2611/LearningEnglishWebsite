const SubmitTestModel = require("../models/Test/submitTestModel");
const AnswerTestModel = require("../models/Test/answerTestModel");
const ScoreModel = require("../models/Test/scoreModel");
const submitTestModel = require("../models/Test/submitTestModel");

exports.createSubmitTest = async (body) => {
  try {
    const newSubmit = await submitTestModel.create({ ...body });

    if (newSubmit) {
      return newSubmit;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

exports.updateAnswerSubmitTest = async (id, part, body) => {
  try {
    let submitTest;
    console.log(body)
    if(part === 1) {
      submitTest = await SubmitTestModel.findByIdAndUpdate(id, 
        { 
            AnswerTests1 : body
        });
    }
    if(part === 2) {
      submitTest = await SubmitTestModel.findByIdAndUpdate(id, 
        { 
              AnswerTests2 : body
        });
    }
    if(part === 3) {
      submitTest = await SubmitTestModel.findByIdAndUpdate(id, 
        { 
            AnswerTests3 : body
        });
    }
    if(part === 4) {
      submitTest = await SubmitTestModel.findByIdAndUpdate(id, 
        { 
            AnswerTests4 : body
        });
    }
    if(part === 5) {
      submitTest = await SubmitTestModel.findByIdAndUpdate(id, 
        { 
            AnswerTests5 : body
        });
    }
    if(part === 6) {
      submitTest = await SubmitTestModel.findByIdAndUpdate(id, 
        { 
            AnswerTests6 : body
        });
    }
    if(part === 7) {
      submitTest = await SubmitTestModel.findByIdAndUpdate(id, 
        { 
            AnswerTests7 : body
        });
    }

    if (submitTest) {
      return submitTest;
    }
    return null;
  } catch (error) {
    throw error;
  }
};
exports.updateSubmitTest = async (id, body) => {
    try {
      let submitTest = await SubmitTestModel.findByIdAndUpdate(id, { ...body });

      //get sentences of listening and reading
      const listenSentences= await AnswerTestModel.find({
        SubmitTest: id, IsListening: true
      })
      const readSentences= await AnswerTestModel.find({
        SubmitTest: id, IsListening: false
      })

      const sentencesListen = listenSentences.length + 1;
      const sentencesRead = readSentences.length + 1;


      const listenScore = await ScoreModel.findOne({
       Score: sentencesListen
      });
      //calculate score of listening and reading
      const readScore = await ScoretModel.findOne({
        Score: sentencesRead
      });

      //calculate score
      const Score = listenScore + readScore;

      //update SubmitTest
      submitTest = await SubmitTestModel.findByIdAndUpdate(id, 
        { 
            ListenScore: listenScore,
            ReadScore: readScore,
            Score: Score 
        });

      if (submitTest) {
        return submitTest;
      }
      return null;
    } catch (error) {
      throw error;
    }
  };

  exports.getSubmitTestById = async (_id) => {
    try {
        const res = await SubmitTestModel.findById(_id );
    
        return res;
      } catch (error) {
        throw error;
      }
  };

  exports.getSubmitTestByTestId = async (testId, userId) => {
    try {
        const res = await SubmitTestModel.findOne({TestId: testId, UserId: userId} );
    
        return res;
      } catch (error) {
        throw error;
      }
  };

  exports.checkSubmitExisted = async (testId, userId) => {
    try {
        const res = await SubmitTestModel.exists({TestId: testId, UserId: userId} );
    
        return res;
      } catch (error) {
        throw error;
      }
  };

