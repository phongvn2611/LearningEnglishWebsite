import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { dictionaryRoot } from "../components/UI/style";
import useTitle from "./../hooks/useTitle";
import { Grid } from '@material-ui/core';
import TopicBox from './../components/TopicBox/index';
import { ROUTES } from '../constants';
import toeicIcon from '../assets/icons/topics/toeic.png'

const useStyle = makeStyles((theme) => ({
  ...dictionaryRoot(theme),
}));

export default function TestPage() {
  useTitle('Test');
  const classes = useStyle();
  const testList = [
    {
      id: '1',
      title: 'Test 1',
    },
    {
      id: '2',
      title: 'Test 2',
    }
  ];
  return (
    <div className={`${classes.root} english-container`}>
    <div className="flex-center-between">
      <h1 className="english-title">Test</h1>
    </div>
      <div className="english-break"></div>
      <Grid container spacing={3}>
        {testList.map((test, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <TopicBox
              to={`/test/${test.id}`}
              title={test.title}
              icon={toeicIcon}
            />
          </Grid>
        ))}
      </Grid>
  </div>
  )
}

