import React from "react";
import classes from "./../Dialog.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog + " " + classes.active}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUwBemFLi-3y33otM5BDuw1BZR0gKMOUrfg&usqp=CAU"
        alt="avatar"
      />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
