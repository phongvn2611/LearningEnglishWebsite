// import { UX } from "constant";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Login from "./index";
import authAction from "./../../redux/actions/authAction";
import { useSelector } from 'react-redux';
import userApi from './../../apis/userApi';
import messageAction from './../../redux/actions/messageAction';
import { login } from './../../redux/actions/authAction';
import { useHistory } from 'react-router-dom';

function LoginData() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = async (account) => {
    try {
      setLoading(true);
      const { email, password } = account;
      const res = await userApi.loginApi(email, password);
    } catch (error) {
      setLoading(false);
    }
  };

  return <Login onLogin={handleLogin} loading={loading} />;
}

export default LoginData;
