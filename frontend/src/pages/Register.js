import RegisterData from '../components/Register/data';
import { ROUTES } from '../constants';
import useCloseNavigation from '../hooks/useCloseNavigation';
import useTitle from '../hooks/useTitle';
import React from 'react';
import { Link } from 'react-router-dom';
import './style/login-signup.scss';

function RegisterPage() {
  useTitle('Register');
  // useCloseNavigation();

  return (
    <div className="pos-rel w-100vw h-100vh">
      <div className="transform-center">
        <RegisterData />

        <div className="has-account">
          Bạn đã có tài khoản?&nbsp;
          {/* <Link to={ROUTES.LOGIN} className="account-link">
            Đăng nhập
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
