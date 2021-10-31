import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Register from './index';
import authAction from './../../redux/actions/authAction';

function RegisterData() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (account) => {
    try {
      setLoading(true);
      const { email, password, name } = account;
      dispatch(authAction.register(name, email, password));
    } catch (error) {
      setLoading(false);
    }
  };

  return <Register onRegister={handleRegister} loading={loading} />;
}

export default RegisterData;
