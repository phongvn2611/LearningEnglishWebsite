import useTitle from 'hooks/useTitle';
import Typography from "@material-ui/core/Typography";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import React, { useState, useEffect } from 'react';
import grammarApi from '../apis/grammarApi';
import { useHistory, useParams } from 'react-router';
import { cloudinaryImgOptimize } from "helper";
import { DEFAULTS } from 'constants/index';
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  mobilelist : {
    height: "115px",
 
},
floatleft: {
  float: "left",
  margin: "0 10px 10px 0px",
  padding: "2px",
},
title: {
  display: 'inline-block',
  fontSize: '2.0rem',
  fontWeight: 400,
  color: 'blue',
  margin: '0.8rem 0rem 0rem 0',
},
tldetail: {
  fontSize: '1.5rem',
  fontWeight:400,
  color: 'black', 
},
textlimit: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  width: "500px",
}

}));

function GrammarByLevelPage() {
  useTitle('Grammar');
  const [list, setList] = useState([]);
  const classes= useStyle();
  const history = useHistory();

  const  level = useParams().level;
  
   useEffect(() => {
   (async function () {
     try {
       const apiRes = await grammarApi.getGrammarByLevel(level);
       if (apiRes.status === 200) {
           console.log(apiRes.data)
         setList(apiRes.data.grammars);
       }
     } catch (error) {}
   })();
 
   return () => {};
 }, []);

 const getImage = (image) =>{
    const imgSrc = cloudinaryImgOptimize( image ? image : DEFAULTS.IMAGE_SRC,
         200,
         200,
         true,
         true
     );
     return imgSrc;
}

const viewDetail=(id)=>{
    history.push(`/grammar/details/${id}`)
}

  return (
    <div className="container">

        <Typography variant="h6" align="center">
               Level {level}
        </Typography>
                
      {list &&(
      list.map((item) => 
   
      <div className={classes.mobilelist} >
      <div>
        <div className={classes.floatleft}>
          <a>
            <img height="80px" width="80px" src={getImage(item.Image)} onClick={()=>viewDetail(item._id)}/>
          </a>
          </div>
          <a className={classes.title} href={`/grammar/details/${item._id}`}><strong> {item.Title}</strong></a>
          <br></br>
          
          <div className={classes.textlimit}>
          <span className={classes.tldetail}>{item.Content}</span>
          </div>
      
      </div>

    </div>
   
     
      ))}

     
    </div>
  );
}

export default GrammarByLevelPage;
