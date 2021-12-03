import React from 'react'
import {LISTEN_TOPIC  } from 'constants/listeningTopics';
import { makeStyles } from "@material-ui/styles";
import { dictionaryRoot } from "../components/UI/style";
import { Grid } from '@material-ui/core';
import TopicBox from '../components/TopicBox/index';
import useTitle from "../hooks/useTitle";

const useStyle = makeStyles((theme) => ({
  ...dictionaryRoot(theme),
}));

export default function WordTopicPage() {
  useTitle("Listen Topic")
  const classes = useStyle();
  return (
    <div className={`${classes.root} dyno-container`}>
      <div className="flex-center-between">
        <h1 className="dyno-title">Topics</h1>
      </div>
      <div className="dyno-break"></div>
      <Grid container spacing={3}>
        {LISTEN_TOPIC.map((topic, index) => (
          <Grid item xs={12} md={4} key={index}>
            <TopicBox
              to={`/listening/topic/${topic.value}`}
              icon={topic.image}
              title={topic.label}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

