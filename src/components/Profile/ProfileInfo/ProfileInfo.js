import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={classes.content__img}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDxEyOcrwDk6R2x-LxXSnQO_2T7rcDVs_9Q&usqp=CAU"
          alt=""
        />
      </div>
      <div className={classes.descriptionBlock}>ava</div>
    </div>
  );
};

export default ProfileInfo;
