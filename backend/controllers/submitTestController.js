const {
    createSubmitTest, 
    updateSubmitTest,
    getSubmitTestById,
    getSubmitTestByTestId,

} = require("../services/submitTestService");

//create submitTest
exports.postSubmitTest = async (req, res) => {
  try {
    const TestId = req.params.TestId;
    const UserId = req.user?.id;

    const StartTime = Date.UTC();

    // create 
    const submitTest = await createSubmitTest({UserId, TestId, StartTime});

    if (submitTest != null) {
      return res.status(200).json({ data: submitTest });
    }
    return res.status(503).json({ message: "Error, can not create question." });
  } catch (error) {
    return res.status(503).json({ message: "Error, can not create question." });
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
    return res.status(200).json({ data });
  } catch (error) {
    console.log(id);
    console.error("ERROR: ", error);
    return res.status(503).json({ message: "Lỗi dịch vụ, thử lại sau" });
  }
};

//get by TestId
exports.getByTestId = async (req, res, next) => {
  try {
    const testId = req.params.id;
    const userId = req.user?.id;

    const data = await getSubmitTestByTestId(testId, userId);
    return res.status(200).json({ data });
  } catch (error) {
    console.log(id);
    console.error("ERROR: ", error);
    return res.status(503).json({ message: "Lỗi dịch vụ, thử lại sau" });
  }
};


//delete by questionid

//delete by listenid

