import React from "react";
import Header from "./Header";

import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
    // userAPI.getHeaderPlanet().then((response) => {
    //   if (response.data) {
    //     let { name, diameter, climate } = response.data.results[0];
    //     this.props.setAuthUserData(name, diameter, climate);
    //   }
    // });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  name: state.auth.name,
});

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
