import { Grid } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Speaker from 'components/UI/Speaker';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import useStyle from './style';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { cloudinaryImgOptimize } from "helper";
import { DEFAULTS } from '../../constants/index';
import {getIPARelative} from '../../redux/actions/ipaAction'


function IPARelative(props) {
  const classes = useStyle();
  const ipas = useSelector((state) => state.ipaReducer.ipas);
  
  const {type, phonetic} =props
  console.log(type);
  console.log(phonetic);
  const dispatch = useDispatch();
  useEffect(() => 
  dispatch(getIPARelative(type, phonetic)), [dispatch])

 const handleClick = (id) =>{
    window.location.href=`${id}`;
  }

  let imgList = [];
if(ipas)
{
    for(let i=0; i< ipas.length; i++)
    {
        if(ipas[i].Image){
        let imgSrc = cloudinaryImgOptimize( ipas[i].Image ? ipas[i].Image : DEFAULTS.IMAGE_SRC,
            200,
            200,
            true,
            true
        );
            imgList[i]=imgSrc;
        }      
    }
}

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={classes.arrowIcon} />}>
       <b className={classes.relative}>Relative Pronunciation</b>

      </AccordionSummary>

      <AccordionDetails>
        <Grid container spacing={3}>
          {ipas &&
            ipas.map((item, key) => (
              <Grid
                item
                className="flex-left"
                xs={12}
                key={key}>
               <div onClick={() => handleClick(item._id)}>
                <img  width="350px" height="200px"
                    src={imgList[key]} />
                  <p className={classes.gcDesc}>{item.Title}</p>
               
                </div>
               
              </Grid>
            ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}


export default IPARelative;
