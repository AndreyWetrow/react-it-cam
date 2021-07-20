import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";
// import StoreContext from "../../StoreContext";

const Navbar = (props) => {
  return (
    <div className={classes.nav}>
      <div className="menu">
        <nav>
          <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.activeLink}>
              Profile
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.activeLink}>
              Messages
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/users" activeClassName={classes.activeLink}>
              Users
            </NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to="/news">News</NavLink>
          </div>
          <div className={classes.item}>
            <a href="https://test">Profile</a>
          </div>
          <div className={classes.item}>
            <a href="https://test">Settings</a>
          </div>
        </nav>
      </div>
      {/*<Friends state={props.state.friends} />*/}
      <Friends state={props.sidebar.friends} />
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     posts: state.profilePage.posts,
//     newPostText: state.profilePage.newPostText,
//   };
// };
// let mapDispatchToProps = (dispatch) => {
//   return {
//     updateNewPostText: (text) => {
//       let action = updateNewPostTextActionCreator(text);
//       dispatch(action);
//     },
//     addPost: () => {
//       dispatch(addPostActionCreator());
//     },
//   };
// };
//
// const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default Navbar;
// export default MyPostsContainer;
