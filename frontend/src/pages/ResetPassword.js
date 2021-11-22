import { ROUTES } from "../constants";
import useCloseNavigation from "../hooks/useCloseNavigation";
import useTitle from "../hooks/useTitle";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style/login-signup.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@material-ui/core/Button";
import LoopIcon from "@material-ui/icons/Loop";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import InputCustom from "../components/UI/InputCustom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { formStyle } from "../components/UI/style";
import { useDispatch } from "react-redux";
import userApi from "./../apis/userApi";
import { setMessage } from "./../redux/actions/messageAction";
import { useParams } from "react-router";

const schema = yup.object().shape({
  password: yup
    .string()
    .trim()
    .required("Nhập mật khẩu")
    .min(6, `Mật khẩu ít nhất 6 ký tự`),
  confirmPassword: yup
    .string()
    .trim()
    .required("Nhập xác nhận mật khẩu")
    .min(6, `Xác nhận mật khẩu ít nhất 6 ký tự`)
    .oneOf([yup.ref("password")], "Nhập xác nhận mật khẩu không khớp"),
});

function ResetPasswordPage() {
  useTitle("Reset password");
  useCloseNavigation();

  const classes = makeStyles(formStyle)();
  const { access_token } = useParams();
  const [visiblePw, setVisiblePw] = useState(false);
  const [visibleConfirmPw, setVisibleConfirmPw] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleResetPassword = async () => {
    try {
      setLoading(true);
      const res = await userApi.resetPassword(user.password, access_token);
      if (res) {
        dispatch(setMessage(res.data.message, "success"));
        history.replace("/login");
      }
    } catch (error) {
      dispatch(setMessage(error.response.data.message, "error"));
      setLoading(false);
    }
  };

  return (
    <div className="pos-rel w-100vw h-100vh">
      <div className="transform-center">
        <form
          className={`${classes.root} flex-col`}
          onSubmit={handleSubmit(handleResetPassword)}
          autoComplete="off"
        >
          <div className="flex-col">
            <div className="t-center mt-5">
              <img
                className={classes.labelIcon}
                src="https://res.cloudinary.com/phongvn2611/image/upload/v1637079637/english/avatar/logo-tiny_seqkri.png"
                alt="logo"
              />
            </div>
            <h1 className={`${classes.title} t-center`}>Đặt lại mật khẩu</h1>
          </div>

          <div className="flex-col">
            <InputCustom
              label="Mật khẩu"
              size="small"
              placeholder="Nhập mật khẩu"
              error={Boolean(errors.password)}
              inputProps={{
                name: "password",
                type: visiblePw ? "text" : "password",
                ...register("password"),
              }}
              onChange={handleChange}
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

          <div className="flex-col">
            <InputCustom
              label="Xác nhận mật khẩu"
              size="small"
              placeholder="Nhập lại mật khẩu"
              error={Boolean(errors.confirmPassword)}
              inputProps={{
                name: "confirmPassword",
                type: visibleConfirmPw ? "text" : "password",
                ...register("confirmPassword"),
              }}
              onChange={handleChange}
              endAdornment={
                visibleConfirmPw ? (
                  <VisibilityIcon
                    className={`${classes.icon} ${classes.visibleConfirmPw}`}
                    onClick={() => setVisibleConfirmPw(false)}
                  />
                ) : (
                  <VisibilityOffIcon
                    className={classes.icon}
                    onClick={() => setVisibleConfirmPw(true)}
                  />
                )
              }
            />
            {errors.confirmPassword && (
              <p className="text-error">{errors.confirmPassword?.message}</p>
            )}
          </div>

          <Button
            className="_btn _btn-primary"
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={loading}
            endIcon={loading && <LoopIcon className="ani-spin" />}
          >
            Đổi mật khẩu
          </Button>

          <div className="or-option w-100 t-center">HOẶC</div>
        </form>

        <div className="has-account">
          Quay lại trang&nbsp;
          <Link to={ROUTES.LOGIN} className="account-link">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
