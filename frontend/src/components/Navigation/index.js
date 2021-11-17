import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ROUTES } from "../../constants";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SettingMenu from "./SettingMenu";
import useStyle from "./style";
import { Typography } from "@material-ui/core";

function Navigation() {
  const classes = useStyle();
  const theme = useTheme();
  const isXsDevice = useMediaQuery(theme.breakpoints.up("xs"));

  const { isAuth, user } = useSelector((state) => state.authReducer);
  const [showInput, setShowInput] = useState(isXsDevice);
  const [anchorMenu, setAnchorMenu] = useState(null);

  const onOpenMenu = (e) => setAnchorMenu(e.currentTarget);
  const onCloseMenu = () => setAnchorMenu(null);

  return (
    <div className={`${classes.navWrapper} w-100vw`} id="dynoNav">
      <div className={`${classes.nav} w-100`}>
        <div className="container h-100 flex-center--ver">
          {(isXsDevice || !showInput) && (
            <Link to={ROUTES.HOME}>
              <img
                className={`${classes.imgSize} ${classes.logo}`}
                src={
                  "https://res.cloudinary.com/phongvn2611/image/upload/v1637079637/avatar/logo-tiny_seqkri.png"
                }
                alt="Logo"
              />
            </Link>
          )}
          <div className={`${classes.control} flex-center--ver`}>
            {showInput && !isXsDevice && (
              <ArrowBackIosIcon
                className={`${classes.iconSize} mr-4 cur-pointer`}
                onClick={() => setShowInput(!showInput)}
              />
            )}

            {isAuth ? (
              <div className={classes.auth} onClick={onOpenMenu}>
                <Avatar
                  className={`${classes.imgSize} ${classes.avt} cur-pointer`}
                  alt="Username"
                  src={user.avatar}
                />
                <Typography variant="body2" className={classes.name}>
                  {user.name}
                </Typography>
              </div>
            ) : (
              <div>
                <Link to={ROUTES.REGISTER}>
                  <Button
                    className="_btn _btn-primary"
                    classes={{
                      root: classes.registerBtn,
                      label: classes.registerLabel,
                    }}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Đăng ký
                  </Button>
                </Link>
                <Link to={ROUTES.LOGIN}>
                  <Button
                    className="_btn _btn-primary"
                    classes={{
                      root: classes.loginBtn,
                      label: classes.loginLabel,
                    }}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Đăng nhập
                  </Button>
                </Link>
              </div>
            )}
            <SettingMenu anchorEl={anchorMenu} onClose={onCloseMenu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
