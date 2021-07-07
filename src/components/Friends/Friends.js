import React from "react";
import classes from "./Friends.module.css";

const Friends = (props) => {
  let friendsElements = props.state.map((friend) => {
    return (
      <div className={classes.item}>
        <span />{" "}
        <div className={classes.friendName} key={friend.id}>
          {friend.name}
        </div>
      </div>
    );
  });

  return (
    <div className={classes.blockFriends}>
      <h2>Friends</h2>
      <div className={classes.items}>{friendsElements}</div>
    </div>
  );
};

export default Friends;
