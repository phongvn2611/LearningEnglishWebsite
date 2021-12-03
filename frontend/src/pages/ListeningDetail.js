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
import { useHistory } from "react-router-dom";

export default function ListeningPage() {
  useTitle("Listening");

  const listenId = useParams().id;
  const {listen} = useSelector((state) => state.listeningReducer);
 
  const history = useHistory();

  function handleClickEdit(id) {
    history.push(`/admin/listening/${id}`);
  }

  function handleClickGoBack() {
    history.push("/admin/listening");
  }


  const dispatch = useDispatch();
  useEffect(() => 
  dispatch(getListening(listenId)), [dispatch])

  return (
    <>
      <Container>
        <Typography variant="h6" align="center">
        {listen.Name}
        </Typography>

        <Typography>
        {listen.Description}
        </Typography>

        {/* phuonglinh */}
       
        <p align="center"><iframe src={listen.Video} width="500" height="300" ></iframe></p>
    {/* phuonglinh */}

    <Typography variant="h6">
        Topic:  {listen.Topic}
    </Typography>
    
    <Typography variant="h6">
        Script: 
    </Typography>
    <Typography variant="body2" align="justify">
      {listen.Script}
    </Typography>
             
    <Button color='primary' onClick={() => handleClickGoBack()}>GO BACK</Button>
    <Button color='primary'>Edit</Button>
         
       
      </Container>
    </>
  );
}
