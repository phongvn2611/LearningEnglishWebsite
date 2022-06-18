import React from "react";
import {
  FormControl,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

export default function Part2() {
  return (
    <div>
      <Typography variant="h5">Part 2</Typography>
      <div>
        <audio controls>
          <source src="horse.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
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
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}
