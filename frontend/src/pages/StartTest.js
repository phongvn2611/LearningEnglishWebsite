import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import QuestionBoard from "components/Test/QuestionBoard";
import { useHistory, useParams } from "react-router-dom";
import { ROUTES } from "../constants";
import Part from "components/Test/Part";
import useTitle from "hooks/useTitle";
import Pagination from "components/Test/Pagination";
import Timer from "components/Test/Timer";
import testApi from "apis/testApi";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [test, setTest] = useState('');
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    (async function () {
      const res = await testApi.getTestById(id);
      setTest(res.data);
    })();
    return () => {};
  }, [id]);
  
  useTitle("Test");
  return (
    <>
      {state === 0 ? (
        <div className={classes.root}>
          <Container className={classes.container}>
            <Typography className={classes.title} variant="h2">
              {test.Name}
            </Typography>
            <Typography className={classes.timeTotal} variant="h5">
              Total time: {test.Duration} minutes
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
              <Pagination
                type={"part"}
                pages={7}
                setCurrentPage={setCurrentPage}
              ></Pagination>
              <Part part={currentPage} />
            </Container>
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <div className="my-5 d-flex jus-content-around">
              <Timer value={test.Duration * 60} setState={setState}></Timer>
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