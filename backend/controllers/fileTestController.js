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
  uploadImage, uploadAudio,
} = require('../services/commonService');
const { updateSubmitTest } = require("../services/submitTestService");
const { getQuestionByFileTestId } = require("../services/questionTestService");
const { getAnswerByQuestionTestId } = require("../services/answerTestService");

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
      // let imgUrl = null;
      // if (Image) {      
      //     imgUrl = await uploadImage(Image, 'english/test');
      // }

      // let audUrl = null;
      // if (Audio) {      
      //     audUrl = await uploadAudio(Image, 'english/test');
      // }
      await createFileTest({TestId, Content, Part, Image, Audio});     
     
    }     
    return res.status(200).json({message: "Successfully."});
    //return res.status(503).json({ message: "Error, can not create question." });
  } catch (error) {
    console.log(error)
    return res.status(503).json(error.message);
  }
};

//get questions of Part
exports.getQuestionsOfPart = async (req, res) => {
  try {
    const {testId, part} = req.query;

    //check if test existed
    const test = await getTestById(testId);
    if (!test) {
      return res.status(400).json({ message: "Error, Not found quiz." });
    }
    //get file of
    const files = await getFileTestByPart(testId, part);

    let Files = [];
    for (let fileItem of files) { 
      
      //get questions of file
      let lstQuestions = await getQuestionByFileTestId(fileItem.id);
      let Questions = [];
  
      //get answers of question
      for (let questionItem of lstQuestions) {
        let Answers = await getAnswerByQuestionTestId(questionItem.id);
        let {FileTestId, Content, Sentence, Image} = questionItem;
        Questions.push({FileTestId, Content, Sentence, Image, Answers});
      }      
      
      //add file to list
      let {TestId, Content, Part, Image, Audio} = fileItem;
      Files.push({TestId, Content, Part, Image, Audio, Questions});     
    }  

    return res.status(200).json({ Files });
  } catch (error) {
    console.error("ERROR: ", error);
    return res.status(503).json({ message: "Lỗi dịch vụ, thử lại sau" });
  }
};

//get by FileTestId
exports.getById = async (req, res) => {
  try {
    const FileTestId = req.params.id;
    const file = await getFileTestById(FileTestId);
    // console.log(question)
    return res.status(200).json({ file });
  } catch (error) {
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

