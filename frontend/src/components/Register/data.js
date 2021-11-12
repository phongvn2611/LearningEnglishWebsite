import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Register from './index';
import authAction from './../../redux/actions/authAction';
import userApi from './../../apis/userApi';
import { useHistory } from 'react-router-dom';
import { setMessage } from './../../redux/actions/messageAction';

function RegisterData() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (account) => {
    try {
      setLoading(true);
      const { email, password, name } = account;
      const res = await userApi.registerApi(name, email, password);
      dispatch(setMessage(res.data.message, 'success'));
      history.replace('/login');
    } catch (error) {
      dispatchEvent(setMessage(error.response.data.message, 'success'));
      setLoading(false);
    }
  };

  return <Register onRegister={handleRegister} loading={loading} />;
}

export default RegisterData;
