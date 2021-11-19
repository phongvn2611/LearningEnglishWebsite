import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import GlobalLoading from '../components/UI/GlobalLoading';
import { setMessage } from './../redux/actions/messageAction';
import userApi from './../apis/userApi';
import { logout } from './../redux/actions/authAction';

function LogoutPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (!isAuth) {
      history.goBack();
      return;
    }

    (async function () {
      try {
        const apiRes = await userApi.logout();
        if (apiRes) {
          dispatch(logout(apiRes));
          dispatch(setMessage(apiRes.data.message, 'success'))
          // window.location.href = history.location.pathname;
          history.replace('/home');
        }
      } catch (error) {
        dispatch(setMessage(error.response.data.message, 'error'));
        history.goBack();
      }
    })();

    return () => {};
  }, [dispatch, history, isAuth]);

  return <>{isAuth && <GlobalLoading title="Logging out ..." />}</>;
}

export default LogoutPage;
