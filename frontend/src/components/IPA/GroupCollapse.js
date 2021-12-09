import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import PropTypes from 'prop-types';
import React from 'react';
import useStyle from './style';

function IPAGroupCollapse({phoneticData, isNoVoice}) {
  const classes = useStyle();
  const handleClick = (id) =>{
    window.location.href = `ipa/details/${id}`;
  }
  return (
  
    <Accordion className={classes.groupCollapse} onClick={() => handleClick(phoneticData._id)}  >
      <AccordionSummary >
     
        <p className={classes.gcTitle}>
          <b>/ {phoneticData.Phonetic} /</b>
        </p>    
      </AccordionSummary>       
    </Accordion>
  );
}

IPAGroupCollapse.propTypes = {
  phoneticData: PropTypes.any,
  isNoVoice: PropTypes.bool,
};

IPAGroupCollapse.defaultProps = {
  phoneticData:[],
  isNoVoice: false,
};

export default IPAGroupCollapse;
