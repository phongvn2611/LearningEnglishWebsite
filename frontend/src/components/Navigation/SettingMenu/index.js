import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FaceIcon from "@material-ui/icons/Face";
import SettingsIcon from "@material-ui/icons/Settings";
import SettingModal from "../Settings/Modal";
import { ROUTES } from "../../../constants";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStyle from "./style";
import { useSelector } from "react-redux";

function SettingMenu({ anchorEl, onClose }) {
  const classes = useStyle();
  const { isAuth, role } = useSelector((state) => state.authReducer);
  const [open, setOpen] = useState(false);

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
          <a href={ROUTES.PROFILE}>
            <MenuItem className={classes.menuItem}>
              <AccountCircleIcon className={classes.icon} fontSize="small" />
              <p className={classes.text}>Thông tin cá nhân</p>
            </MenuItem>
          </a>
          {role !== "user" ? (
            <Link to={ROUTES.HOME}>
              <MenuItem className={classes.menuItem}>
                <FaceIcon className={classes.icon} fontSize="small" />
                <p className={classes.text}>User</p>
              </MenuItem>
            </Link>
// =======
//             <a href={ROUTES.ADMIN}>
//               <MenuItem className={classes.menuItem}>
//                 <FaceIcon className={classes.icon} fontSize="small" />
//                 <p className={classes.text}>Admin</p>
//               </MenuItem>
//             </a>
// >>>>>>> main
          ) : (
            ""
          )}
          <MenuItem onClick={() => setOpen(true)} className={classes.menuItem}>
            <SettingsIcon className={classes.icon} fontSize="small" />
            <p className={classes.text}>Cài đặt</p>
          </MenuItem>
          
          <a href={ROUTES.LOGOUT}>
            <MenuItem className={classes.menuItem}>
              <ExitToAppIcon className={classes.icon} fontSize="small" />
              <p className={classes.text}>Đăng xuất</p>
            </MenuItem>
          </a>
          {open && <SettingModal open={open} onClose={() => setOpen(false)} />}
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
