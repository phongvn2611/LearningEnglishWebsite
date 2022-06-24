const {
    createSubmitTest, 
    updateSubmitTest,
    getSubmitTestById,
    getSubmitTestByTestId,
    updateAnswerSubmitTest,
    checkSubmitExisted,
} = require("../services/submitTestService");

//create submitTest
exports.postSubmitTest = async (req, res) => {
  try {
    const TestId = req.params.id;
    const UserId = req.user?.id;

    const StartTime = Date.now();

    // create 
    const submitTest = await createSubmitTest({UserId, TestId, StartTime});
    if (submitTest != null) {
      return res.status(200).json(submitTest);
    }
    return res.status(503).json({ message: "Error, can not create question." });
  } catch (error) {
    return res.status(503).json(error.message);
  }
};

//update Answers in submitTest
exports.putAnswerSubmitTest = async (req, res) => {
  try {
    const SubmitTestId = req.params.id;
    const {Part, AnswerTests} = req.body
    console.log({Part, AnswerTests})
    // update 
    const submitTest = await updateAnswerSubmitTest(SubmitTestId, Part, AnswerTests);

    if (submitTest != null) {
      return res.status(200).json({ data: submitTest });
    }

  } catch (error) {
    return res.status(503).json(error.message);
  }
};


//update submitTest
exports.putSubmitTest = async (req, res) => {
    try {
      const SubmitTestId = req.params.id;
      const FinishTime = Date.UTC();
      const AnswerTests = req.body;

      // update 
      const submitTest = await updateSubmitTest(SubmitTestId, {FinishTime, AnswerTests });
  
      if (submitTest != null) {
        return res.status(200).json({ data: submitTest });
      }
      return res.status(503).json({ message: "Error, can not create question." });
    } catch (error) {
      return res.status(503).json({ message: "Error, can not create question." });
    }
  };

//get by Id
exports.getById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await getSubmitTestById(id);
    return res.status(200).json(data );
  } catch (error) {
    return res.status(503).json(error.message);
  }
};

//get by TestId
exports.getByTestId = async (req, res, next) => {
  try {
    const testId = req.params.id;
    const userId = req.user?.id;

    const data = await getSubmitTestByTestId(testId, userId);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(503).json(error.message);
  }
};

//check submit existed
exports.checkSubmitExist = async (req, res, next) => {
  try {
    const testId = req.params.id;
    const userId = req.user?.id;

    const data = await checkSubmitExisted(testId, userId);
    console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(503).json(error.message);
  }
};


//delete by questionid

//delete by listenid

