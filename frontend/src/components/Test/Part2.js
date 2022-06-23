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

export default function Part2({ part, testId }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [partQuestions, setPartQuestions] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fileTestApi.getAllQuestionsOfPart(testId, part);
      setPartQuestions(res.data.Files[0]);
    })();
    return () => {};
  }, [testId, part]);
  return (
    <div>
      <Typography variant="h5">Part 2</Typography>
      {partQuestions.Audio && (
        <div>
          <audio controls>
            <source src={partQuestions.Audio} type="audio/mpeg" />
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
