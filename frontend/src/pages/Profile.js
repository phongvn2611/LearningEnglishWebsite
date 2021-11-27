import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import InputCustom from "components/UI/InputCustom";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import userApi from "./../apis/userApi";
import useTitle from "hooks/useTitle";
import { setMessage } from "redux/actions/messageAction";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const useStyle = makeStyles(() => ({
  wrap: {
    minHeight: "calc(100vh - 7.2rem)",
  },

  root: {
    backgroundColor: "var(--bg-color-sec)",
    padding: "1.5rem 2.5rem",
    borderRadius: "var(--border-radius)",
    textAlign: "center",
    boxShadow: "var(--box-shadow)",
  },

  avtWrap: {
    width: "15rem",
    height: "15rem",
    position: "relative",
  },

  avt: {
    borderRadius: "50%",
    border: "2px solid var(--primary-color)"
  },

  cameraIconWrap: {
    position: "absolute",
    right: 0,
    bottom: 0,

    width: "4.2rem",
    height: "4.2rem",
    padding: "1.2rem",

    backgroundColor: "var(--primary-color)",
    borderRadius: "50%",
    cursor: "pointer",
    border: "solid 5px var(--bg-color-sec)",

    "&:hover, &:active": {
      opacity: 0.85,
    },
  },

  cameraIcon: {
    color: "var(--text-color)",
    fontSize: "2rem",
  },

  fileInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    opacity: 0,
    cursor: "pointer",
  },

  name: {
    fontSize: "2.4rem",
    lineHeight: 1.5,
    letterSpacing: "0.75px",
  },

  email: {
    fontSize: "1.5rem",
    fontWeight: 400,
    color: "var(--label-color)",
    letterSpacing: "0.75px",
  },

  info: {
    margin: "2.4rem 0",

    "& p": {
      lineHeight: 2,
      fontSize: "1.6rem",
      letterSpacing: "0.75px",
      color: "var(--text-color)",
    },
  },

  coin: {
    color: "var(--label-color)",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  icon: {
    fontSize: "1.8rem",
    color: "var(--grey)",
    cursor: "pointer",
  },

  visiblePw: {
    color: "var(--primary-color)",
  },
  visibleConfirmPw: {
    color: "var(--primary-color)",
  },
  editBtn: {
    padding: "5px 10px",
    width: "100%",
  },
}));

const schema = yup.object().shape({
  name: yup.string().trim(),
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

export default function ProfilePage() {
  useTitle("Profile");
  const dispatch = useDispatch();
  const classes = useStyle();
  const [data, setData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const { user } = useSelector((state) => state.authReducer);
  const [avatar, setAvatar] = useState(false);
  const [visiblePw, setVisiblePw] = useState(false);
  const [visibleConfirmPw, setVisibleConfirmPw] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleUpdateAvatar = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) {
        dispatch(setMessage("No files were uploaded", "error"));
      }
      if (file.size / 1024 ** 2 > 2) {
        dispatch(setMessage("Size too large", "error"));
      }
      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        dispatch(setMessage("File format is incorrect", "error"));
      }
      let formData = new FormData();
      formData.append("file", file);
      const res = await userApi.updateAvatar(formData);
      dispatch(setMessage("Uploaded file successfully", "success"));
      setAvatar(res.data.url);
     
    } catch (err) {
      dispatch(setMessage(err.response.data.message, "error"));
    }
  };

  const handleUpdateInfo = async () => {
    try {
      const res = await userApi.updateProfile(
        data.name ? data.name : user.name,
        avatar ? avatar : user.avatar
      );
      dispatch(setMessage(res.data.message, "success"));
    } catch (err) {}
  };

  const handleUpdatePassword = async () => {
    try {
      const res = await userApi.updatePassword(data.password);
      if (res) {
        dispatch(setMessage(res.data.message, "success"));
      }
    } catch (err) {
      dispatch(setMessage(err.response.data.message, "error"));
    }
  };

  const handleUpdate = () => {
    if (data.name || avatar) {
      handleUpdateInfo();
    }
    if (data.password) {
      handleUpdatePassword();
    }  
  };

  return (
    <div className={`${classes.wrap} container flex-center`}>
      <div className={classes.root}>
        <div className="flex-center w-100 h-100">
          <div className={classes.avtWrap}>
            <img
              src={avatar ? avatar : user.avatar}
              alt=""
              className={`${classes.avt} w-100 h-100`}
            />
            <div className={`${classes.cameraIconWrap} flex-center`}>
              <CameraIcon className={classes.cameraIcon} />
              <input
                type="file"
                className={classes.fileInput}
                onChange={handleUpdateAvatar}
              />
            </div>
          </div>
        </div>

        <div className="flex-col mt-8">
          <InputCustom
            className="mb-10"
            label="Họ tên"
            size="small"
            error={Boolean(errors.name)}
            defaultValue={user.name}
            placeholder="Nhập họ tên"
            inputProps={{
              name: "name",
              ...register("name"),
            }}
            onChange={handleChange}
          />
          {errors.name && <p className="text-error">{errors.name?.message}</p>}
          <InputCustom
            className="mb-10"
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

        <div className={classes.info}>
          <p>
            Số coin hiện tại: <span className={classes.coin}>{user.coin}</span>
          </p>
        </div>

        <div className="d-flex w-100">
          <Button
            className={`${classes.editBtn} _btn _btn-primary w-50`}
            onClick={handleUpdate}
          >
            Cập nhật
          </Button>
        </div>
      </div>
    </div>
  );
}
