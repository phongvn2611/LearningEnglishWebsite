import React from "react";
import { Link } from "react-router-dom";
import "./style/login-signup.scss";
import { ROUTES } from "../constants";
import LoginData from './../components/Login/data';
import useTitle from './../hooks/useTitle';

function LoginPage() {
  useTitle("Login");

  return (
    <div className="pos-rel w-100vw h-100vh">
      <div className="transform-center">
        <LoginData />

        <div className="has-account">
          Bạn chưa có tài khoản?&nbsp;
          {/* <Link to={ROUTES.REGISTER} className="account-link">
            Đăng ký
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
