import React from 'react'
import { TOPICS } from 'constants/topics';
import { makeStyles } from "@material-ui/styles";
import { dictionaryRoot } from "../components/UI/style";
import { Grid } from '@material-ui/core';
import TopicBox from './../components/TopicBox/index';
import { ROUTES } from 'constants/index';
import useTitle from "./../hooks/useTitle";

const useStyle = makeStyles((theme) => ({
  ...dictionaryRoot(theme),
}));

export default function WordTopicPage() {
  useTitle("Word Topic")
  const classes = useStyle();
  return (
    <div className={`${classes.root} dyno-container`}>
      <div className="flex-center-between">
        <h1 className="dyno-title">Từ vựng</h1>
      </div>
      <div className="dyno-break"></div>
      <Grid container spacing={3}>
        {TOPICS.map((topic, index) => (
          <Grid item xs={12} md={4} key={index}>
            <TopicBox
              to={`/word/${topic.key}`}
              icon={topic.icon}
              title={topic.title}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

