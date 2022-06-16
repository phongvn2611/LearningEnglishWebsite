import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import QuestionBoard from "components/Test/QuestionBoard";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../constants";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "80vh",
    color: "white",
    position: "relative",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  button: {
    padding: "10px 35px",
    fontWeight: "600",
    backgroundColor: "#68c2e8",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#56bde8",
      boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.25)",
    },
  },
  title: {
    marginBottom: "10px",
    fontWeight: 600,
    color: "#68c2e8",
  },
  timeTotal: {
    marginBottom: "15px",
    fontWeight: 500,
  },
  timeDetail: {
    marginBottom: "20px",
  },
  control: {
    margin: "10px 0",
    justifyContent: "center",
  },
}));

export default function StartTestPage() {
  const classes = useStyles();
  const [state, setState] = useState(0);
  const history = useHistory();
  return (
    <>
      {state === 0 ? (
        <div className={classes.root}>
          <Container className={classes.container}>
            <Typography className={classes.title} variant="h2">
              Test 01
            </Typography>
            <Typography className={classes.timeTotal} variant="h5">
              Total time: 120 minutes
            </Typography>
            <Typography className={classes.timeDetail} variant="body2">
              Listening: 45 minutes
            </Typography>
            <Typography className={classes.timeDetail} variant="body2">
              Reading: 75 minutes
            </Typography>
            <Button onClick={() => setState(1)} className={classes.button}>
              Start
            </Button>
          </Container>
        </div>
      ) : state === 1 ? (
        <Grid container>
          <Grid item lg={8} md={6} xs={12}>
            <h1>Question</h1>
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <Grid container spacing={3} className={classes.control}>
              <Grid item lg={6} xs={12}>
                <Typography variant="h6">120m00s</Typography>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Button className={classes.button} onClick={() => setState(2)}>
                  Submit
                </Button>
              </Grid>
            </Grid>
            <QuestionBoard />
          </Grid>
        </Grid>
      ) : (
        <div className={classes.root}>
          <Container className={classes.container}>
            <Typography className={classes.title} variant="h4">
              Congrats
            </Typography>
            <Typography className={classes.timeTotal} variant="h5">
              Total point: 990 points
            </Typography>
            <Typography className={classes.timeDetail} variant="body2">
              Listening: 495 points
            </Typography>
            <Typography className={classes.timeDetail} variant="body2">
              Reading: 495 points
            </Typography>
            <Button
              onClick={() => history.replace(ROUTES.TEST)}
              className={classes.button}
            >
              Quay về
            </Button>
          </Container>
        </div>
      )}
    </>
  );
}
