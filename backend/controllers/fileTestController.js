const {
    createFileTest,
    getFileTestByTestId,
    getFileTestById,
    getFileTestByPart,

} = require("../services/fileTestService");

const {
    getTestById
} = require("../services/testService");

const {
  updateTest
} = require('../services/testService');

const {
  uploadImage, uploadAudio,
} = require('../services/commonService');
const { updateSubmitTest } = require("../services/submitTestService");
//create fileTest
exports.postFileTest = async (req, res) => {
  try {
    const TestId = req.params.id;
    //check if test existed
    const test = await getTestById(TestId);
    if (!test) {
      return res.status(400).json({ message: "Error, Not found listen." });
    }

    for (let file of req.body) {
      let { Content, Part, Image, Audio} = file;
      let imgUrl = null;
      if (Image) {      
          imgUrl = await uploadImage(Image, 'english/test');
      }

      let audUrl = null;
      if (Audio) {      
          audUrl = await uploadAudio(Image, 'english/test');
      }
      await createFileTest({TestId, Content, Part, Image: imgUrl, Audio: audUrl });     
     
    }     
    return res.status(200).json({message: "Successfully."});
    //return res.status(503).json({ message: "Error, can not create question." });
  } catch (error) {
    return res.status(503).json(error.message);
  }
};

//update question
// exports.putQuestion = async (req, res) => {
//   try {
//     //check if question
//     const questionId = req.params.id;
//     const QuestionExist = await getQuestionById(questionId);
//     if (!QuestionExist) {
//       return res
//         .status(400)
//         .json({ message: "Error, Not found this question." });
//     }
  
//     const { Content, Sentence } = req.body;
   
//     const FileTestId = QuestionExist.FileTestId;
//     const question = await updateQuestionTest(questionId,{ Content, Sentence, FileTestId });
//     if (question != null) {
//       return res.status(200).json({ question });
//     }
//     return res.status(503).json({ message: "Error, can not update question." });
//   } catch (error) {
//     console.error("POST ERROR: ", error);
//     return res.status(503).json({ message: "Error, can not update question." });
//   }
// };

//get by Id
exports.getById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const file = await getFileTestById(id);
    return res.status(200).json({file });
  } catch (error) {
    console.log(id);
    console.error("ERROR: ", error);
    return res.status(503).json({ message: "Lỗi dịch vụ, thử lại sau" });
  }
};

//get by FileTestId
exports.getByTestId = async (req, res) => {
  try {
    const testId = req.params.id;

    //check if test existed
    const test = await getTestById(testId);
    if (!test) {
      return res.status(400).json({ message: "Error, Not found quiz." });
    }
    //get file of
    const files = await getFileTestByTestId(testId);
    // console.log(question)
    return res.status(200).json({ files });
  } catch (error) {
    console.error("ERROR: ", error);
    return res.status(503).json({ message: "Lỗi dịch vụ, thử lại sau" });
  }
};

//get by TestId and Part
exports.getByTestIdAndPart = async (req, res) => {
  try {
    //const testId = req.params.id;
    const {testId, part} = req.query;

    const files = await getFileTestByPart(testId, part);
    // console.log(question)
    return res.status(200).json({ files });
  } catch (error) {
    console.error("ERROR: ", error);
    return res.status(503).json({ message: "Lỗi dịch vụ, thử lại sau" });
  }
};
//delete by questionid

//delete by listenid

