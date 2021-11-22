import React, { useState } from 'react';
//import SentenceContributionData from './Sentence/data';
import useStyle from './style';
import WordContributionData from './Word/data';

function Contribution() {
  const classes = useStyle();

  return (
    <div className="container">
      <div className={classes.root}>      
            <div className="ani-fade">
              <WordContributionData />
            </div>         
      </div>
    </div>
  );
}

export default Contribution;
