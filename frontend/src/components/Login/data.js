// import { UX } from "constant";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Login from "./index";
import authAction from "./../../redux/actions/authAction";

function LoginData() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async (account) => {
    try {
      setLoading(true);
      const { email, password } = account;

      dispatch(authAction.login(email, password));
    } catch (error) {
      setLoading(false);
    }
  };

  return <Login onLogin={handleLogin} loading={loading} />;
}

export default LoginData;
