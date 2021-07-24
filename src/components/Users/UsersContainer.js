import { connect } from "react-redux";
import Users from "./Users";
import axios from "axios";
import React from "react";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

class UsersContainerComponent extends React.Component {
  extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  transformUsers = (user) => {
    return {
      id: this.extractId(user),
      name: user.name,
      gender: user.gender,
      birthYear: user.birth_year,
      eyeColor: user.eye_color,
      height: user.height,
    };
  };
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(`https://swapi.dev/api/people/?page=${this.props.currentPage}`)
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.results.map(this.transformUsers));
        this.props.setTotalUsersCount(response.data.count);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(`https://swapi.dev/api/people/?page=${pageNumber}`)
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.results.map(this.transformUsers));
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userID) => {
//       dispatch(followAC(userID));
//     },
//     unfollow: (userID) => {
//       dispatch(unfollowAC(userID));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainerComponent);
