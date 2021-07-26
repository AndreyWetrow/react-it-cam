import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfile } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1;
    }
    console.log(userId);
    axios.get(`https://swapi.dev/api/species/` + userId).then((response) => {
      this.props.setUserProfile(response.data);
      console.log(response.data);
    });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
// export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
