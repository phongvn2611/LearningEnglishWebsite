import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
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
}));

export default function Pagination({ type = 'question', pages, setCurrentPage }) {
  const classes = useStyles();
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    console.log(selected);
    setCurrentPage(selected);
  }, [selected]);
  return (
    <div className={`d-flex jus-content-${type === 'part' ? 'between' : 'around'} align-items-center my-5`}>
      <Button
        className={classes.button}
        disabled={selected === 1 ? true : false}
        onClick={() => setSelected((prev) => (prev <= 1 ? prev : prev - 1))}
      >
        {type === 'part' ? 'Prev Part' : 'Prev'}
      </Button>
      <Button
        className={classes.button}
        disabled={selected === pages ? true : false}
        onClick={() => setSelected((prev) => (prev >= pages ? prev : prev + 1))}
      >
        {type === 'part' ? 'Next Part' : 'Next'}
      </Button>
    </div>
  );
}
