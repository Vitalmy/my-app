import React from "react";
import s from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { getUserProfile } from "../../redux/profile-reducer";
import { Navigate, useParams } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

function withRouter(Children) {
  return (props) => {
    let match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let MapStateToProps = (state) => ({ profile: state.profilePage.profile });

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(MapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
