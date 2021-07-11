import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";
import StoreContext from "../../StoreContext";

const Navbar = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
            {/*<Friends state={props.state.friends} />*/}
            <Friends state={store.getState().sidebar.friends} />
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default Navbar;
