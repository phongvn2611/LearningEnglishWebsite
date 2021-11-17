import React from 'react'
import { dictionaryRoot } from '../components/UI/style'
import { makeStyles } from '@material-ui/styles';
import useTitle from './../hooks/useTitle';

const useStyle = makeStyles((theme) => ({
  ...dictionaryRoot(theme)
}))

export default function QuizAdminPage() {
  useTitle('Listening Admin')
  const classes = useStyle();
  return (
    <div className={`${classes.root} dyno-container`}>
      <div className="flex-center-between">
        <h1 className="dyno-title">Quản lý bài quiz</h1>
      </div>
      <div className="dyno-break"></div>
    </div>
  )
}

