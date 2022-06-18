import React from "react";
import {
  FormControl,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

export default function Part5() {
  return (
    <div>
      <Typography variant="h5">Part 5</Typography>
      <Typography>Question 1</Typography>
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
