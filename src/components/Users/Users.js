import React from "react";
import styles from "./users.module.css";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((elem) => {
          return (
            <span
              key={elem.toString()}
              className={props.currentPage === elem ? styles.selectedPage : ""}
              onClick={(e) => {
                props.onPageChanged(elem);
              }}
            >
              {elem}
            </span>
          );
        })}
      </div>
      {/*<button onClick={getUsers}>Get Users</button>*/}
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <span>
              <div>
                <NavLink to={"/profile/" + user.id}>
                  <img
                    className={styles.userPhoto}
                    src={`https://starwars-visualguide.com/assets/img/characters/${user.id}.jpg`}
                    alt=""
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === Number(user.id)
                    )}
                    onClick={() => {
                      // props.toggleFollowingProgress(true, Number(user.id));
                      // props.unfollow(user.id);
                      // props.toggleFollowingProgress(false, Number(user.id));

                      props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === Number(user.id)
                    )}
                    onClick={() => {
                      props.follow(user.id);
                      // props.toggleFollowingProgress(true, Number(user.id));
                      //
                      // userAPI.getFollow().then((response) => {
                      //   if (response.status === 201) {
                      //     props.follow(user.id);
                      //   }
                      //   props.toggleFollowingProgress(false, Number(user.id));
                      //
                      //
                      // });
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
              </span>
              <span>
                {/*<div>{user.location.country}</div>*/}
                <div>{"user.location.country"}</div>
                <div>{user.name}</div>
                <div>{user.gender}</div>
                <div>{user.height}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
