import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";

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
      <Friends state={props.state.friends} />
    </div>
  );
};

export default Navbar;
