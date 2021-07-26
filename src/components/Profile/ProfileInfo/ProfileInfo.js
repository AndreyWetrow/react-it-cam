import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          className={classes.content__img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDxEyOcrwDk6R2x-LxXSnQO_2T7rcDVs_9Q&usqp=CAU"
          alt=""
        />
        <div>{props.profile.language}</div>
        <div>{props.profile.name}</div>
        <div>{props.profile.homeworld}</div>
        <div>{props.profile.average_height}</div>
      </div>
      <div className={classes.descriptionBlock}>ava</div>
    </div>
  );
};

export default ProfileInfo;
