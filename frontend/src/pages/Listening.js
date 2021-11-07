import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useTitle from "../hooks/useTitle";
import { AudioCard } from "material-ui-player";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ListeningPage() {
  useTitle("Listening");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container>
        <Typography variant="h4" align="center">
          What subjects did you dislike studying?
        </Typography>
        <VideoCard
          src={
            "https://res.cloudinary.com/phongvn2611/video/upload/v1635815820/video/listening-video-1_quiljv.mp4"
          }
          width={"640px"}
        />

        {/* phuonglinh */}
        {/* video youtube */}

        <div class="container-fluid mb-4" >
        <div class="row">

            <div class="col-12 col-lg-6 mb-4">
              
                <div class="card w-100">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe id="player" class="embed-responsive-item" src="https://www.youtube.com/embed/jcOwNAgNq5s?enablejsapi=1" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <ul class="list-unstyled" id="videoList"></ul>
            </div>
          </div>
      </div>
    {/* phuonglinh */}

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              indicatorColor="primary"
            >
              <Tab label="Script" {...a11yProps(0)} />
              <Tab label="Quiz" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Typography variant="body2" align="justify">
              Hello. I am Peace from Nigeria, and the question I'll be answering
              is what school subjects did you dislike studying? I did not like
              to study mathematics at all because mathematics contains formulas
              and figures, which I would have to memorize, and I do not like to
              memorize things. They're not as easy as words. Words are easy to
              read, to understand and then remember. You could even remember the
              words in your own and put them into your own language. Unlike
              mathematics, where the figures have to be exactly the same as well
              as the formulas. So, no, I did not like studying mathematics at
              all. I liked biology and English. Thank you.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography variant="h6">
              Answer the following questions about the interview.
            </Typography>
            <Typography variant="body2">
              What subject does she dislike?
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="math"
              ></FormControlLabel>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="history"
              ></FormControlLabel>
            </FormGroup>
            <Typography variant="body2">
              She does not like to ______.{" "}
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="read that much"
              ></FormControlLabel>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="use formulas"
              ></FormControlLabel>
            </FormGroup>
            <Typography variant="body2">She says she likes _____. </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="history"
              ></FormControlLabel>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="biology"
              ></FormControlLabel>
            </FormGroup>
            <Button color='primary'>Check Answers</Button>
            <Button color='primary'>Reset Quiz</Button>
            <Button color='primary'>Show Answers</Button>
          </TabPanel>
        </Box>
      </Container>
    </>
  );
}
