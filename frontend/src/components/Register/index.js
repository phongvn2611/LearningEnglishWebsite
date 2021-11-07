import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LoopIcon from "@material-ui/icons/Loop";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import InputCustom from "../../components/UI/InputCustom";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { formStyle } from "../../components/UI/style";

const nameRegex = /^[^\d~`!@#$%^&*\(\)\\\|\.,\?\/\-\+\=\_]+$/gi;
const schema = yup.object().shape({
  email: yup.string().trim().required("Nhập email").email("Email không hợp lệ"),
  name: yup
    .string()
    .trim()
    .required("Nhập họ tên")
    .matches(nameRegex, "Họ tên không chứa số và ký tự đặc biệt"),
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

function Register({ onRegister, loading }) {
  const classes = makeStyles(formStyle)();

  const [visiblePw, setVisiblePw] = useState(false);
  const [visibleConfirmPw, setVisibleConfirmPw] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form
        className={`${classes.root} flex-col`}
        onSubmit={handleSubmit(onRegister)}
        autoComplete="off"
      >
        <div className="flex-col">
          <h1 className={`${classes.title} t-center`}>Tạo tài khoản</h1>
          <div className="t-center mt-5">
            <AccountCircleIcon className={classes.labelIcon} />
          </div>
        </div>

        <div className="flex-col">
          <InputCustom
            label="Email"
            size="small"
            placeholder="Nhập email"
            error={Boolean(errors.email)}
            inputProps={{
              name: "email",
              autoFocus: true,
              ...register("email"),
            }}
          />
          {errors.email && (
            <p className="text-error">{errors.email?.message}</p>
          )}
        </div>

        <div className="flex-col">
          <InputCustom
            label="Họ tên"
            size="small"
            placeholder="Nhập họ tên"
            error={Boolean(errors.name)}
            inputProps={{
              name: "name",
              ...register("name"),
            }}
          />
          {errors.name && <p className="text-error">{errors.name?.message}</p>}
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
        >
          Đăng ký
        </Button>

        <div className="or-option w-100 t-center">HOẶC</div>
      </form>
    </>
  );
}

Register.propTypes = {
  onRegister: PropTypes.func,
  loading: PropTypes.bool,
};

Register.defaultProps = {
  onRegister: function () {},
  loading: false,
};

export default Register;
