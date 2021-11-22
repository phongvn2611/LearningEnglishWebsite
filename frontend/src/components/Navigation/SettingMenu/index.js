import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FaceIcon from "@material-ui/icons/Face";
// import HelpIcon from '@material-ui/icons/Help';
// import SettingsIcon from '@material-ui/icons/Settings';
// import SettingModal from 'components/SpeedDial/Settings/Modal';
import { ROUTES } from "../../../constants";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import useStyle from "./style";
import { useSelector } from "react-redux";

function SettingMenu({ anchorEl, onClose }) {
  const classes = useStyle();
  const { isAuth, role } = useSelector((state) => state.authReducer);

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
          <Link to={ROUTES.PROFILE}>
            <MenuItem className={classes.menuItem}>
              <AccountCircleIcon className={classes.icon} fontSize="small" />
              <p className={classes.text}>Thông tin cá nhân</p>
            </MenuItem>
          </Link>
          {role === "admin" ? (
            <Link to={ROUTES.ADMIN}>
              <MenuItem className={classes.menuItem}>
                <FaceIcon className={classes.icon} fontSize="small" />
                <p className={classes.text}>Admin</p>
              </MenuItem>
            </Link>
          ) : (
            ""
          )}
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
