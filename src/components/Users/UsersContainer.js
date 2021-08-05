import { connect } from "react-redux";
import Users from "./Users";
import React from "react";
import {
  follow,
  getUsers,
  setCurrentPage,
  toggleFollowingProgress,
  unfollow,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";

class UsersContainer extends React.Component {
  // extractId = (item) => {
  //   const idRegExp = /\/([0-9]*)\/$/;
  //   return item.url.match(idRegExp)[1];
  // };

  // transformUsers = (user) => {
  //   return {
  //     id: this.extractId(user),
  //     name: user.name,
  //     gender: user.gender,
  //     birthYear: user.birth_year,
  //     eyeColor: user.eye_color,
  //     height: user.height,
  //   };
  // };

  componentDidMount() {
    this.props.getUsers(this.props.currentPage);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber);

    // this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);
    //
    // userAPI.getUsers(pageNumber).then((data) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.results.map(this.transformUsers));
    // });
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
          // toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress,
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
export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  })
)(UsersContainer);

// export default connect(mapStateToProps, {
//   follow,
//   unfollow,
//   // setUsers,
//   setCurrentPage,
//   // setTotalUsersCount,
//   // toggleIsFetching,
//   toggleFollowingProgress,
//   getUsers,
// })(UsersContainer);
