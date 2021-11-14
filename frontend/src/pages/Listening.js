import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useTitle from "../hooks/useTitle";
import { VideoCard } from "material-ui-player";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import {getListening}  from "../redux/actions/listeningAction";
import { useParams } from 'react-router-dom';

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
  const [value, setValue] = useState(1);

  const listenId = useParams().id;
  const {listen, questions} = useSelector((state) => state.listeningReducer);
  const dispatch = useDispatch();
  useEffect(() => 
  dispatch(getListening(listenId)), [dispatch])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Container>
        <Typography variant="h6" align="center">
        {listen.Name}
        </Typography>

        {/* phuonglinh */}
        {/* video youtube */}      
            <div class="col-12 col-lg-6 mb-4">
                <div class="card w-100">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe id="player" class="embed-responsive-item" src={listen.Video} frameborder="1px"></iframe>
                    </div>
                   
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <ul class="list-unstyled" id="videoList"></ul>
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
             {listen.Script}
            </Typography>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Typography variant="h6">
              Answer the following questions about the interview.
            </Typography>

            {questions.map((question) => 
            <><Typography variant="body2">
                {question.Content}
              </Typography>
              <FormGroup>
                  {question.Answers.map((item, i) => 
                  <FormControlLabel
                    key={i}
                    control={<Checkbox color="primary" />}
                    label={item.content}
                  >
                  </FormControlLabel>
                  )}
                </FormGroup></>
                        
            )}
           

            <Button color='primary'>Check Answers</Button>
            <Button color='primary'>Reset Quiz</Button>
            <Button color='primary'>Show Answers</Button>
          </TabPanel>
        </Box>
      </Container>
    </>
  );
}
