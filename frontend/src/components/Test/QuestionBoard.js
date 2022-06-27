import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { randomNumberArray } from "helper";

const useStyles = makeStyles(() => ({
  button: {
    border: "1px solid #68c2e8",
    color: "#68c2e8",
    backgroundColor: "#fff",
    minWidth: "35px",
    fontSize: '12px'
  },
}));

export default function QuestionBoard({ part }) {
  const classes = useStyles();
  const randomQuestionList = (part) => {
    let list = "";
    if (part === 1) list = randomNumberArray(1, 6);
    else if (part === 2) list = randomNumberArray(7, 31);
    else if (part === 3) list = randomNumberArray(32, 70);
    else if (part === 4) list = randomNumberArray(71, 100);
    else if (part === 5) list = randomNumberArray(101, 130);
    else if (part === 6) list = randomNumberArray(131, 146);
    else list = randomNumberArray(147, 200);
    return list;
  };
  const questionList = randomQuestionList(part);
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="body2">{`Part ${part}`}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={1}>
          {questionList.map((question, index) => (
            <Grid item lg={1} md={3} xs={4} key={index}>
              <Button className={classes.button}>{question}</Button>
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
