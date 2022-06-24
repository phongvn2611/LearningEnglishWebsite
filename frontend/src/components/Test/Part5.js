import React, { useState, useEffect } from "react";
import {
  FormControl,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import Pagination from "./Pagination";
import fileTestApi from "apis/fileTestApi";
import submitTestApi from "apis/submitTestApi";

export default function Part5({ part, testId, submitId, setSubmitAnswers5 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [partQuestions, setPartQuestions] = useState([]);
  const [submitList, setSubmitList] = useState([]);

  const addAnswers = (answer) =>{
    let checkExisted = submitList.some(item =>
      answer.QuestionTestId === item.QuestionTestId
    );

    let newList = [];
    if(checkExisted === true){
      newList = submitList.filter(item => item.QuestionTestId !== answer.QuestionTestId);     
    }
    else{
      newList = submitList;      
    }
    
    newList.push(answer);
    setSubmitList(newList);
    setSubmitAnswers5(newList);    
}

const IsCheckedAnswer = (answerId) =>{
  let checkedAnswer = submitList.some(item =>
    answerId === item._id
  );
  return checkedAnswer;    
}
  useEffect(() => {
    (async function () {
      const res = await fileTestApi.getAllQuestionsOfPart(testId, part);
      setPartQuestions(res.data.Files);
    })();
    return () => {};
  }, [testId, part]);

  useEffect(() => {
    (async function () {
      const res = await submitTestApi.getSubmitById(submitId);
      setSubmitList(res.data.AnswerTests5);
      setSubmitAnswers5(res.data.AnswerTests5);
    })();
    return () => {};
  }, [testId, part]);

  return (
    <div>
      <Typography variant="h5">Part 5</Typography>
      <Typography>Question 1</Typography>
      <div>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="a" control={<Radio  
                             />} label="A" />
            <FormControlLabel value="b" control={<Radio 
                               />} label="B" />
            <FormControlLabel value="c" control={<Radio 
                               />} label="C" />
            <FormControlLabel value="d" control={<Radio 
                              />} label="D" />
          </RadioGroup>
        </FormControl>
      </div>
      <Pagination pages={30} setCurrentPage={setCurrentPage}></Pagination>
    </div>
  );
}
