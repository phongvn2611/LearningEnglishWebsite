import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
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
    marginBottom: '10px',
    fontWeight: 600,
    color: "#68c2e8"
  },
  timeTotal: {
    marginBottom: '15px',
    fontWeight: 500,
  },
  timeDetail: {
    marginBottom: '20px'
  }

}))

export default function StartTestPage() {
  useTitle('Start Test');
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h2">Test 01</Typography>
        <Typography className={classes.timeTotal} variant="h5">Total time: 120 minutes</Typography>
        <Typography className={classes.timeDetail} variant="body2">Listening: 45 minutes</Typography>
        <Typography className={classes.timeDetail} variant="body2">Reading: 75 minutes</Typography>
        <Button className={classes.button}>Start</Button>
      </Container>
    </div>
  );
}
