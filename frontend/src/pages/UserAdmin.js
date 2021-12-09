import React, { useState, useEffect } from "react";
import { dictionaryRoot } from "../components/UI/style";
import { makeStyles } from "@material-ui/styles";
import useTitle from "./../hooks/useTitle";
import userApi from "apis/userApi";
import { Grid } from "@material-ui/core";
import UserCard from "components/UI/UserCard";
import { ROUTES } from "constants/index";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  ...dictionaryRoot(theme),
}));

export default function UserAdminPage() {
  useTitle("User Admin");
  const classes = useStyle();
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async function () {
      const res = await userApi.getAllUsers();
      setUsers(res.data);
    })();
    return () => {};
  }, []);


  return (
    <div className={`${classes.root} dyno-container`}>
      <div className="flex-center-between">
        <h1 className="dyno-title">Quản lý người dùng</h1>
        <AddIcon className="dyno-setting-icon mr-5" onClick={() => history.push(ROUTES.ADD_USER)} />
      </div>
      <div className="dyno-break"></div>
      <Grid container spacing={3}>
        {users.map((user, index) => (
          <Grid item xs={12} md={6} key={index}>
            <UserCard
              to={`/admin/user/detail/${user._id}`}
              avatar={user.avatar}
              name={user.name}
              role={user.roleType}
              status={user.isLocked}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
