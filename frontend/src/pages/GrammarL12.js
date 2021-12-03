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
import {getGrammar}  from "../redux/actions/grammarAction";
import { useParams } from 'react-router-dom';
import { makeStyles } from "@material-ui/core";
import { cloudinaryImgOptimize } from "helper";
import { DEFAULTS } from '../constants/index';

const useStyle = makeStyles(() => ({
    borderTopic: {
        borderStyle: "solid",
        borderColor: "initial",
        borderWidth: "1px",
        backgroundColor: "#ccff66",
        width: "700px",
        height: "auto",
      },
      grammarbox: {
        backgroundColor: "#CF9",
        padding: "10px 10px",
        border: "1px solid #666",
        marginBottom: "10px",	
      },
   
  }));
  

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
  const [value, setValue] = useState(0);
  const classes= useStyle();
  const grammarId = useParams().id;
  const {grammar, questions} = useSelector((state) => state.grammarReducer);
 
  const dispatch = useDispatch();
  useEffect(() => 
  dispatch(getGrammar(grammarId)), [dispatch])

  const getText = (text) =>{
    let Text =[];
    if(text){
    Text = text.split("\n");
    } 
    return Text;
  };

  let imgSrc = null;
    if(grammar)
    {
        imgSrc = cloudinaryImgOptimize( grammar.Image ? grammar.Image : DEFAULTS.IMAGE_SRC,
            200,
            200,
            true,
            true
        );
    }

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };
console.log(grammar)
  return (
    <>
      <Container>
        <><Typography variant="h6" align="center">
            {grammar.Title}
        </Typography>
        <Typography>
            {grammar.Content}
        </Typography></>

        {grammar.Image ?  (
             <img className={classes.picture} src={imgSrc} alt="photo" align="center" />
             
            ):(
                <p align="center"><iframe src= {grammar.Video} width="500" height="300"></iframe></p>
        )}
        
        {grammar.Video && (
        <audio controls>
        <source src={grammar.Video} type="audio/mpeg"/>
        Your browser does not support the audio element.
        </audio>
        )}

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              indicatorColor="primary"
            >
              <Tab label="Script" {...a11yProps(0)} />
              <Tab label="Grammar" {...a11yProps(1)} />
              <Tab label="Quiz" {...a11yProps(2)} />
             
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
          {getText(grammar.Script).length!=0 && (getText(grammar.Script).map((item) =>
            <Typography variant="body2" align="justify">
             {item}
            </Typography>
         ))}
          </TabPanel>

          <TabPanel value={value} index={1}>
          {grammar.Items && (
              grammar.Items.map((item, index) =>
            <><Typography className={classes.grammarbox}>
              <p><strong>Point {index+1} :  </strong>{item.Point}</p>
            </Typography>
            <div>
                {getText(item.Examples).map((it) => 
                <Typography variant="body2" align="justify">
                {it}
                </Typography>
                )}
            </div></>
         ))}
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Typography variant="h6">
              Answer the following questions about the interview.
            </Typography>


            {questions && (
            questions.map((question) => 
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
            )
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
