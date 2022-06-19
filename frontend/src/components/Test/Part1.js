import React from "react";
import {
  FormControl,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

export default function Part1() {
  return (
    <div>
      <Typography variant="h5">Part 1</Typography>
      <Typography>Question 1</Typography>
      <div>
      <img src="https://images.unsplash.com/photo-1655387446055-13b6968d9150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Girl in a jacket" width="500" height="300" />
      </div>
      <div>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="a" control={<Radio />} label="A" />
          <FormControlLabel value="b" control={<Radio />} label="B" />
          <FormControlLabel value="c" control={<Radio />} label="C" />
          <FormControlLabel value="d" control={<Radio />} label="D" />
        </RadioGroup>
      </FormControl>
      </div>
    </div>
  );
}
