import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Register from './index';
import authAction from './../../redux/actions/authAction';
import userApi from './../../apis/userApi';
import messageAction from './../../redux/actions/messageAction';
import { useHistory } from 'react-router-dom';

function RegisterData() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (account) => {
    try {
      setLoading(true);
      const { email, password, name } = account;
      const res = await userApi.registerApi(name, email, password);
      dispatch(messageAction.setMessage(res.data.message, 'success'));
      history.replace('/login');
    } catch (error) {
      dispatchEvent(messageAction.setMessage(error.response.data.message, 'success'));
      setLoading(false);
    }
  };

  return <Register onRegister={handleRegister} loading={loading} />;
}

export default RegisterData;
