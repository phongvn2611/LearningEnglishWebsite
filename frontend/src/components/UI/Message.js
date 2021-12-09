import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMessage } from '../../redux/actions/messageAction';

function Message() {
  const dispatch = useDispatch();
  const { open, duration, message, type, variant } = useSelector(
    (state) => state.messageReducer,
  );

  const handleClose = () => {
    dispatch(closeMessage());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} variant={variant}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Message;
