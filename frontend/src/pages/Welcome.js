import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import background from "../assets/background-welcome.jpg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    background: `url(${background}) no-repeat center center / cover`,
    color: "white",
    position: "relative"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  logo: {
    width: "200px",
    height: "200px",
    marginBottom: "20px"
  },
  title: {
    fontSize: "40px",
    color: "#fff",
    marginBottom: "10px",
    fontWeight: "600"
  },
  desc: {
    fontSize: "25px",
    color: "#fff",
    marginBottom: "30px"
  },
  button: {
    padding: "10px 35px",
    backgroundColor: "#68c2e8",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#56bde8",
      boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.25)"
    }
  }
}));

export default function Welcome() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <img
          src="https://res.cloudinary.com/phongvn2611/image/upload/v1634738823/avatar/website-logo-small_uqfxjx.png"
          alt="Logo"
          className={classes.logo}
        />
        <Typography className={classes.title} variant="h1">
          Chào mừng bạn đến với English Website
        </Typography>
        <Typography className={classes.desc} variant="p">
          Nơi bắt đầu học Tiếng Anh từ con số 0
        </Typography>
        <Button className={classes.button}>Bắt đầu</Button>
      </Container>
    </div>
  );
}
