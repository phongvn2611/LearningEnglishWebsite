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

export default function Part4({ testId, part }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [partQuestions, setPartQuestions] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fileTestApi.getAllQuestionsOfPart(testId, part);
      const indexOfLast = currentPage;
      const indexOfFirst = indexOfLast - 1;
      setPartQuestions(res.data.Files.slice(indexOfFirst, indexOfLast));
    })();
    return () => {};
  }, [testId, part, currentPage]);

  return (
    <div>
      <Typography variant="h5">Part 4</Typography>
      {partQuestions[0]?.Audio && (
        <div>
          <audio controls>
            <source src={partQuestions[0]?.Audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
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
                            control={<Radio />}
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
      <Pagination pages={10} setCurrentPage={setCurrentPage}></Pagination>
    </div>
  );
}
