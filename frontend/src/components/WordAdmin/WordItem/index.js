
import { cloudinaryImgOptimize } from "helper";
import PropTypes from "prop-types";
import React, { useState } from "react";
import useStyle from "./style";
import wordApi from "apis/wordApi";
import WordDetailModal from "components/UI/WordDetailModal";
import { useDispatch } from "react-redux";
import { setMessage } from "redux/actions/messageAction";
import { DEFAULTS } from './../../../constants/index';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteWord } from "redux/actions/wordAction";
import Speaker from "components/UI/Speaker";
import { useParams } from "react-router";

function WordItem({ word, type, phonetic, picture, mean }) {
  const classes = useStyle();
  const imgSrc = cloudinaryImgOptimize(
    picture ? picture : DEFAULTS.IMAGE_SRC,
    50,
    50,
    true,
    true
  );

  const [modal, setModal] = useState({ loading: false, open: false });
  const dispatch = useDispatch();
  const { topic_id } = useParams();


  const deleteHandler = () => {
    if (window.confirm('Bạn chắc chắn muốn xóa bài viết này?')) {
      dispatch(deleteWord(word, type));
      dispatch(setMessage("Delete successfully", "success"));
     window.location.reload();
    }
  };

  const handleClickEdit = (id) => {
    window.location.href = `/admin/word/edit/${id}`;
  }

  const onShowDetail = async (word) => {
    try {
      setModal({ open: true, loading: true });
      const apiRes = await wordApi.getWord(word);
      if (apiRes.status === 200) {
        setModal({ open: true, loading: false, ...apiRes.data });
      }
    } catch (error) {
      setModal({ open: false, loading: false });
      dispatch(setMessage("Không thể lấy từ", "error"));
    }
  };

  return (
    <>
      <div className={`${classes.root} flex-center-between`}>
        <div 
          className="w-100 flex-center--ver"
          onClick={() => onShowDetail(word)}
        >
          <img className={classes.picture} src={imgSrc} alt="photo" />
          <div className="ml-8 flex-grow-1">
            <h3 className={classes.word}>
              {word}{" "}
              {Boolean(type) && (
                <span className={classes.type}>( {type} )</span>
              )}
            </h3>
            {Boolean(phonetic) && (
              <p className={`${classes.phonetic} phonetic`}>/ {phonetic} /</p>
            )}
            <p className={classes.mean}>{mean}</p>
          </div>
        </div>
        {topic_id &&  (
          <div className="flex-center--ver">
            <Speaker text={word} />
          </div>
        )}

        <div className="flex-center--ver">
        <div className="mr-5">
          <EditIcon className="dyno-setting-icon"
          onClick={() => handleClickEdit(word)}
          />
        </div>
        <DeleteIcon className="dyno-setting-icon" 
         onClick={() => deleteHandler()}
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

WordItem.propTypes = {
  mean: PropTypes.string,
  onShowDetail: PropTypes.func,
  phonetic: PropTypes.string,
  picture: PropTypes.string,
  type: PropTypes.string,
  word: PropTypes.string,
};

WordItem.defaultProps = {
  onShowDetail: function () {},
};

export default WordItem;
