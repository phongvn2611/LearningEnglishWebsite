
import { cloudinaryImgOptimize } from "helper";
import PropTypes from "prop-types";
import React, { useState } from "react";
import useStyle from "./style";
import WordDetailModal from "components/UI/WordDetailModal";
import { useDispatch } from "react-redux";
import { setMessage } from "redux/actions/messageAction";
import { DEFAULTS } from 'constants/index';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteListen } from "redux/actions/listeningAction";
import { useHistory } from "react-router-dom";

function GrammarItem({ key, Point, grammarItems}) {
  const classes = useStyle();

  const history = useHistory();
  
  const [modal, setModal] = useState({ loading: false, open: false });
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    let arr =[]
    for(let i=0; i<grammarItems.length;i++)
    {
      if(i != id)
      {
        arr.push(grammarItems[i])
      }
    }
    grammarItems= arr;
  };

  return (
    <>
      <div className={`${classes.root} flex-center-between`}>
        <div 
          className="w-100 flex-center--ver"
          // onClick={() => handleClick(key)}
        >
          {/* <img className={classes.picture} src={imgSrc} alt="photo" /> */}
          <div className="ml-8 flex-grow-1">
            <h3 className={classes.word}>
             {Point}              
            </h3>
          </div>
        </div>
        <div className="flex-center--ver">
        <div className="mr-5">
        </div>
        <DeleteIcon className="dyno-setting-icon" 
         onClick={() => deleteHandler(key)}
         />

      </div>
      </div>
    </>
  );
}

GrammarItem.propTypes = {
  Point: PropTypes.string,
  key: PropTypes.number,
  grammarItems: PropTypes.array,
};

GrammarItem.defaultProps = {
};

export default GrammarItem;
