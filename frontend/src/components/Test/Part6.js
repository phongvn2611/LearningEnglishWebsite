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

export default function Part6({part, testId, submitId, setSubmitAnswers6}) {
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
    setSubmitAnswers6(newList);    
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
      const indexOfLast = currentPage;
      const indexOfFirst = indexOfLast - 1;
      setPartQuestions(res.data.Files.slice(indexOfFirst, indexOfLast));
    })();
    return () => {};
  }, [testId, part, currentPage]);

  useEffect(() => {
    (async function () {
      const res = await submitTestApi.getSubmitById(submitId);
      setSubmitList(res.data.AnswerTests3);
      setSubmitAnswers6(res.data.AnswerTests3);
    })();
    return () => {};
  }, [testId, part]);
  return (
    <div>
      <Typography variant="h5">Part 6</Typography>
      {partQuestions[0]?.Image && (
        <div>
        <img
          src={partQuestions[0]?.Image}
          alt="Girl in a jacket"
          width="500"
          height="300"
        />
      </div>
      )}
      <div>
        <FormControl>
          {partQuestions[0]?.Questions &&
            partQuestions[0]?.Questions.map((question, index) => {
              return (
                <div key={index}>
                  <Typography>Question {question.Sentence}</Typography>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    {question.Answers &&
                      question.Answers.map((answer, index) => {
                        return (
                          <FormControlLabel
                            key={index}
                            value={answer.Sentence}
                            control={<Radio 
                              onClick={()=>addAnswers(answer)}
                              checked = {IsCheckedAnswer(answer._id)}
                            />}
                            label={answer.Content}
                          />
                        );
                      })}
                  </RadioGroup>
                </div>
              );
            })}
        </FormControl>
      </div>
      <Pagination pages={4} setCurrentPage={setCurrentPage}></Pagination>
    </div>
  );
}
