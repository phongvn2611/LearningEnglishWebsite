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

export default function Part1({ part, testId }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [partQuestions, setPartQuestions] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fileTestApi.getAllQuestionsOfPart(testId, part);
      console.log(res.data.Files[0]);
      setPartQuestions(res.data.Files[0]);
    })();
    return () => {};
  }, [testId, part]);
  return (
    <div>
      <Typography variant="h5">Part 1</Typography>
      {partQuestions.audio && (
        <div>
          <audio controls>
            <source src={partQuestions.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
      {partQuestions.Questions &&
        partQuestions.Questions.map((question, index) => {
          return (
            <div key={index}>
              <Typography>Question {question.Sentence}</Typography>
              <div>
                <img src={question.Image} alt="" width="500" height="300" />
              </div>
              <div>
                <FormControl>
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
                            control={<Radio />}
                            label={answer.Sentence}
                          />
                        );
                      })}
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          );
        })}
      <Pagination pages={1} setCurrentPage={setCurrentPage}></Pagination>
    </div>
  );
}
