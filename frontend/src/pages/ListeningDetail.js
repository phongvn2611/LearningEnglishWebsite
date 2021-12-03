import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import useTitle from "../hooks/useTitle";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import {getListening}  from "../redux/actions/listeningAction";
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";



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

  const getScript = (sct) =>{
    let Script =[];
    if(sct){
    Script = sct.split("\n");
    } 
    return Script;
  };

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
        Topic:    <i><mark>  {listen.Topic} </mark></i>
    </Typography>
    
    <Typography variant="h6">
        Script: 
    </Typography>
    {getScript(listen.Script).length!=0 && (getScript(listen.Script).map((item) =>
            <Typography variant="body2" align="justify">
             {item}
            </Typography>
      ))}
             
    <Button color='primary' onClick={() => handleClickGoBack()}>GO BACK</Button>
    <Button color='primary'>Edit</Button>
         
       
      </Container>
    </>
  );
}
