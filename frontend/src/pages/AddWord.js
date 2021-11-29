import React, { useState } from "react";
import WordContributionData from "components/WordAdmin/AddWord/Word/data";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  root: {
    margin: "3.2rem 0",
  },

  tabs: {
    marginTop: "2.4rem",
    marginBottom: "3.6rem",
    display: "flex",
    borderBottom: "solid 1px var(--border-color)",
  },

  tab: {
    padding: "1.2rem 2.4rem",
    color: "var(--label-color)",
    cursor: "pointer",

    textAlign: "center",
    fontSize: "1.6rem",
    textTransform: "uppercase",
    fontWeight: 700,

    transition: "all 0.25s",

    "&.active": {
      backgroundColor: "var(--primary-color)",
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      color: "#fff",
    },
  },
}));

function AddWordPage() {
  const classes = useStyle();

  return (
    <div className="container">
      <div className={classes.root}>
        <div className="ani-fade">
          <WordContributionData />
        </div>
      </div>
    </div>
  );
}

export default AddWordPage;
