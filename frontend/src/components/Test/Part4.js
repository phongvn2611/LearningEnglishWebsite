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

export default function Part4({ part, testId, submitId, setSubmitAnswers4}) {
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
    setSubmitAnswers4(newList);    
}

const IsCheckedAnswer = (answerId) =>{
  let checkedAnswer = submitList.some(item =>
    answerId === item._id
  );
  return checkedAnswer;    
}

  useEffect(() => {
    (async function () {
      const res = await fileTestApi.getAllQuestionsOfFile(testId, part, currentPage);
      // const indexOfLast = currentPage;
      // const indexOfFirst = indexOfLast - 1;
      setPartQuestions(res.data);

      var audio = document.getElementById('audio');

      var source = document.getElementById('audioSource');
      source.src = res.data.Audio;
    
      audio.load(); //call this to just preload the audio without playing
      audio.play(); //call this to play the song right away

    })();
    return () => {};
  }, [testId, part, currentPage]);

  useEffect(() => {
    (async function () {
      const res = await submitTestApi.getSubmitById(submitId);
      setSubmitList(res.data.AnswerTests4);
      setSubmitAnswers4(res.data.AnswerTests4);
    })();
    return () => {};
  }, [testId, part]);

  return (
    <div>
      <Typography variant="h5">Part 4</Typography>
      {partQuestions?.Audio && (
        <div>
           <audio id="audio" controls="controls">
        <source id="audioSource" src=""></source>
        Your browser does not support the audio format.
      </audio>          
        </div>
      )}

    {partQuestions?.Image && (
            <div>
              <img src={partQuestions.Image} alt="" width="500" height="300" />         
            </div>
      )}

      <div>
        <FormControl>
          {partQuestions?.Questions &&
            partQuestions?.Questions.map((question, index) => {
              return (
                <div key={index}>
                  <Typography>{question.Sentence}. {question.Content}</Typography>
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
                            label={`(${answer.Sentence}) ${answer.Content}`}
                          />
                        );
                      })}
                  </RadioGroup>
                </div>
              );
            })}
        </FormControl>
      </div>
      <Pagination 
        pages={10} 
        setCurrentPage={setCurrentPage}
        submitAnswers4={submitList}
        submitId={submitId}>
      </Pagination>
    </div>
  );
}
