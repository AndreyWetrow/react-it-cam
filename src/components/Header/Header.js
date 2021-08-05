import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://marketplace.canva.com/EAD7RXOxkOs/1/0/400w/canva-blue-and-white-gaming-logo-SFn3TzE8ERQ.jpg"
        alt=""
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? props.name : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
