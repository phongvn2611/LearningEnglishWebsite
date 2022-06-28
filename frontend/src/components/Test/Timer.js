import { Typography } from "@material-ui/core";
import { convertTime } from "helper";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Timer({ value, setState }) {
  let initTime = convertTime(value);
  const [time, setTime] = useState({
    hours: initTime.hours,
    minutes: initTime.minutes,
    seconds: initTime.seconds,
  });
  const [timer, setTimer] = useState(null);

  // useEffect(() => {
  //   window.sessionStorage.setItem("hours", time.hours);
  //   window.sessionStorage.setItem("minutes", time.minutes);
  //   window.sessionStorage.setItem("seconds", time.seconds);
  // }, [time]);


  // useEffect(() => {
  //   const hours = JSON.parse(window.sessionStorage.getItem("hour", time.hours));
  //   const minutes = JSON.parse(window.sessionStorage.getItem("minutes", time.minutes));
  //   const seconds = JSON.parse(window.sessionStorage.getItem("seconds", time.seconds));
  //   setTime({hours, minutes, seconds});
  
  // }, []);


  useEffect(() => {
    let myInterval = setInterval(() => {
      setTime((time) => {
        const updatedTime = { ...time };
        if (time.seconds > 0) {
          updatedTime.seconds--;
        }
        if (time.seconds === 0) {
          if (time.hours === 0 && time.minutes === 0) {
            clearInterval(myInterval);
            setState(2);
          } else if (time.minutes > 0) {
            updatedTime.minutes--;
            updatedTime.seconds = 59;
          } else if (updatedTime.hours > 0) {
            updatedTime.hours--;
            updatedTime.minutes = 59;
            updatedTime.seconds = 59;
          }
        }
        return updatedTime;
      });
    }, 1000);
    setTimer(myInterval);
  }, []);

  return (
    <Typography variant="h6">
      {time.hours < 10 && time.hours !== 0
        ? `0${time.hours}:`
        : time.hours >= 10 && `${time.hours}:`}
      {time.minutes < 10 ? `0${time.minutes}` : time.minutes}:
      {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
    </Typography>
  );
}
