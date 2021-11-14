import PropTypes from 'prop-types';
import React, { useState } from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputCustom from '../../components/UI/InputCustom';
import { formStyle } from '../../components/UI/style';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LockIcon from '@material-ui/icons/Lock';
import LoopIcon from '@material-ui/icons/Loop';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import userApi from './../../apis/userApi';
import messageAction from './../../redux/actions/messageAction';
import { login } from './../../redux/actions/authAction';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email đang trống')
    .email('Email không hợp lệ'),
  password: yup
    .string()
    .required('Mật khẩu đang trống')
    .min(6, `Mật khẩu tối thiểu 6 ký tự`),
});

function LoginLocalForm(props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = makeStyles(formStyle)();
  const [visiblePw, setVisiblePw] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleLogin = async (e) => {
    try {
      setLoading(true);
      const res = await userApi.loginApi(user.email, user.password);
      dispatch(messageAction.setMessage(res.data.message, 'success'));
      localStorage.setItem('firstLogin', true);
      dispatch(login());
    }
    catch (err) {
      dispatch(messageAction.setMessage(err.response.data.message))
      setLoading(false);
    }
  }

  return (
    <form
      className={`${classes.root} flex-col`}
      onSubmit={handleSubmit(handleLogin)}
      autoComplete="off">
      <div className="flex-col">
        <h1 className={`${classes.title} t-center`}>Đăng nhập</h1>
        <div className="t-center mt-5">
          <LockIcon className={classes.labelIcon} />
        </div>
      </div>

      <div className="flex-col">
        <InputCustom
          label="Email"
          size="small"
          placeholder="Nhập email"
          onChange={handleChange}
          error={Boolean(errors.email)}
          inputProps={{
            name: 'email',
            autoFocus: true,
            ...register('email'),
          }}
        />
        {errors.email && <p className="text-error">{errors.email?.message}</p>}
      </div>

      <div className="flex-col">
        <InputCustom
          label="Mật khẩu"
          size="small"
          placeholder="Nhập mật khẩu"
          onChange={handleChange}
          error={Boolean(errors.password)}
          inputProps={{
            name: 'password',
            type: visiblePw ? 'text' : 'password',
            ...register('password'),
          }}
          endAdornment={
            visiblePw ? (
              <VisibilityIcon
                className={`${classes.icon} ${classes.visiblePw}`}
                onClick={() => setVisiblePw(false)}
              />
            ) : (
              <VisibilityOffIcon
                className={classes.icon}
                onClick={() => setVisiblePw(true)}
              />
            )
          }
        />
        {errors.password && (
          <p className="text-error">{errors.password?.message}</p>
        )}
      </div>

      {/* <Link className={classes.forgotPw} to={ROUTES.FORGOT_PASSWORD}>
        Quên mật khẩu ?
      </Link> */}

      <Button
        className="_btn _btn-primary"
        type="submit"
        variant="contained"
        color="primary"
        size="large">
        Đăng nhập
      </Button>

      <div className="or-option w-100 t-center">HOẶC</div>

      {props.children}
    </form>
  );
}

function Login(props) {
  return (
    <LoginLocalForm {...props}>
      
    </LoginLocalForm>
  )
}

Login.propTypes = {
  loading: PropTypes.bool,
  handleLogin: PropTypes.func,
};

Login.defaultProps = {
  loading: false,
  handleLogin: function () {},
};

export default Login;
