import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reduser";

let MapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
let MapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Users);
