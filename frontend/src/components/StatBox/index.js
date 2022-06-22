import React from "react";
import useStyle from "./style";

function StatBox({ count, icon, title }) {
  const classes = useStyle();
  return (
    <div className={`${classes.root} flex-center--ver w-100`}>
      <img className={classes.icon} src={icon} alt="Icon" />
      <div>
        <h6 className={classes.title}>{title}</h6>
        <h3 className={classes.count}>{count}</h3>
      </div>
    </div>
  );
}

export default StatBox;
