import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import QuestionBoard from "components/Test/QuestionBoard";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../constants";
import Part from "components/Test/Part";
import useTitle from "hooks/useTitle";

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
    padding: "10px 25px",
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
    margin: "5px 0",
    justifyContent: "center",
  },
}));

export default function StartTestPage() {
  const classes = useStyles();
  const [state, setState] = useState(0);
  const [selectedPart, setSelectedPart] = useState(1);
  const history = useHistory();
  useTitle('Test');
  const handleNextPart = () => {
    setSelectedPart((prev) => {
      return prev + 1;
    });
  };
  const handlePrevPart = () => {
    setSelectedPart((prev) => {
      return prev - 1;
    });
  };
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
            <Container>
              <div className="d-flex jus-content-between my-5">
                {selectedPart > 1 ? (
                  <Button className={classes.button} onClick={handlePrevPart}>
                    Prev
                  </Button>
                ) : (
                  <span></span>
                )}
                {selectedPart < 7 ? (
                  <Button className={classes.button} onClick={handleNextPart}>
                    Next
                  </Button>
                ) : (
                  <span></span>
                )}
              </div>
              <Part part={selectedPart} />
            </Container>
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <div className="my-5 d-flex jus-content-around">
              <Typography variant="h6">120:00</Typography>
              <Button className={classes.button} onClick={() => setState(2)}>
                Submit
              </Button>
            </div>
            <QuestionBoard part={1} />
            <QuestionBoard part={2} />
            <QuestionBoard part={3} />
            <QuestionBoard part={4} />
            <QuestionBoard part={5} />
            <QuestionBoard part={6} />
            <QuestionBoard part={7} />
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
