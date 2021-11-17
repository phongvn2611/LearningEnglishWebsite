import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import HelpIcon from '@material-ui/icons/Help';
// import SettingsIcon from '@material-ui/icons/Settings';
// import SettingModal from 'components/SpeedDial/Settings/Modal';
import { ROUTES } from "../../../constants";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useStyle from "./style";
import userApi from "./../../../apis/userApi";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "./../../../redux/actions/messageAction";
import { logout } from "./../../../redux/actions/authAction";

function SettingMenu({ anchorEl, onClose }) {
  const classes = useStyle();
  const { isAuth } = useSelector((state) => state.authReducer);

  return (
    <>
      {isAuth ? (
        <Menu
          classes={{ paper: classes.root }}
          anchorEl={anchorEl}
          disableScrollLock={true}
          getContentAnchorEl={null}
          onClose={onClose}
          open={Boolean(anchorEl)}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
        >
          {/* <Link to={ROUTES.USER_ACCOUNT}>
        <MenuItem className={classes.menuItem}>
          <AccountCircleIcon className={classes.icon} fontSize="small" />
          <p className={classes.text}>Thông tin cá nhân</p>
        </MenuItem>
      </Link>

      <MenuItem onClick={() => setOpen(true)} className={classes.menuItem}>
        <SettingsIcon className={classes.icon} fontSize="small" />
        <p className={classes.text}>Cài đặt</p>
      </MenuItem>

      <a href={LINKS.FB} target="_blank" rel="noreferrer">
        <MenuItem className={classes.menuItem}>
          <HelpIcon className={classes.icon} fontSize="small" />
          <p className={classes.text}>Liên hệ - Giúp đỡ</p>
        </MenuItem>
      </a> */}

          <Link to={ROUTES.LOGOUT}>
            <MenuItem className={classes.menuItem}>
              <ExitToAppIcon className={classes.icon} fontSize="small" />
              <p className={classes.text}>Đăng xuất</p>
            </MenuItem>
          </Link>
        </Menu>
      ) : (
        ""
      )}
    </>
  );
}

SettingMenu.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
};

SettingMenu.defaultProps = {
  anchorEl: null,
  onClose: function () {},
};

export default SettingMenu;
