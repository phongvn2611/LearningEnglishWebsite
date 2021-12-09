
import { cloudinaryImgOptimize } from "helper";
import PropTypes from "prop-types";
import React, { useState } from "react";
import useStyle from "./style";
import WordDetailModal from "components/UI/WordDetailModal";
import { useDispatch } from "react-redux";
import { setMessage } from "redux/actions/messageAction";
import { DEFAULTS } from '../../../constants/index';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteListen } from "redux/actions/listeningAction";
import { useHistory } from "react-router-dom";

function ListeningItem({ _id, Name, Image, Topic, CreateDate }) {
  const classes = useStyle();
  const imgSrc = cloudinaryImgOptimize(
    Image ? Image : DEFAULTS.IMAGE_SRC,
    50,
    50,
    true,
    true
  );

  const history = useHistory();
  function handleClick(id) {
    history.push(`/admin/listening/details/${id}`);
  }
  function handleEditClick(id) {
    history.push(`/admin/listening/edit/${id}`);
  }
  const [modal, setModal] = useState({ loading: false, open: false });
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm('Bạn chắc chắn muốn xóa bài viết này?')) {
       dispatch(deleteListen(id));
       dispatch(setMessage("Delete successfully", "success"));
     window.location.reload();
    }
  };

  return (
    <>
      <div className={`${classes.root} flex-center-between`}>
        <div 
          className="w-100 flex-center--ver"
          onClick={() => handleClick(_id)}
        >
          <img className={classes.picture} src={imgSrc} alt="photo" />
          <div className="ml-8 flex-grow-1">
            <h3 className={classes.word}>
              {Name}
              
            </h3>
          
              <p className={`${classes.phonetic} phonetic`}> Topic: {Topic} </p>
           
            <p className={classes.mean}>Create Date: {CreateDate}</p>
          </div>
        </div>
        <div className="flex-center--ver">
        <div className="mr-5">
          <EditIcon className="dyno-setting-icon"
           onClick={() => handleEditClick(_id)}
           />
        </div>
        <DeleteIcon className="dyno-setting-icon" 
         onClick={() => deleteHandler(_id)}
         />

      </div>
      </div>
      {modal.open && (
        <WordDetailModal
          {...modal}
          onClose={() => setModal({ open: false, loading: false })}
        />
      )}
    </>
  );
}

ListeningItem.propTypes = {
  CreateDate: PropTypes.string,
  onShowDetail: PropTypes.func,
  Topic: PropTypes.string,
  Image: PropTypes.string,
  Name: PropTypes.string,
  _id: PropTypes.string,
};

ListeningItem.defaultProps = {
  onShowDetail: function () {},
};

export default ListeningItem;
