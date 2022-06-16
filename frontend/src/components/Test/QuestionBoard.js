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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
  button: {
    border: "1px solid #68c2e8",
    color: "#68c2e8",
    backgroundColor: "#fff",
  },
}));

export default function QuestionBoard() {
  const classes = useStyles();
  const questionList = new Array(200).fill().map((_, index) => index + 1);
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="body2">Danh sách câu hỏi</Typography>
      </AccordionSummary>
      <AccordionDetails style={{overflowY: 'scroll', width: '100%'}}>
        <Grid container spacing={1}>
          {questionList.map((question, index) => (
            <Grid item lg={2} md={3} xs={4} key={index}>
              <Button className={classes.button}>{question}</Button>
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
