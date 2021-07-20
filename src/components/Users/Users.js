import React from "react";
import styles from "./users.module.css";
import axios from "axios";

class Users extends React.Component {
  extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  transformUsers = (user) => {
    return {
      id: this.extractId(user),
      name: user.name,
      gender: user.gender,
      birthYear: user.birth_year,
      eyeColor: user.eye_color,
      height: user.height,
    };
  };
  componentDidMount() {
    // axios.get("https://social-network.samuraijs.com/users").then((response) => {
    axios
      .get(`https://swapi.dev/api/people/?page=${this.props.currentPage}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        console.log(response.data.count);
        console.log(response.data.results.map(this.transformUsers));

        this.props.setUsers(response.data.results.map(this.transformUsers));
        this.props.setTotalUsersCount(response.data.count);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://swapi.dev/api/people/?page=${pageNumber}`)
      .then((response) => {
        this.props.setUsers(response.data.results.map(this.transformUsers));
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
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
                className={
                  this.props.currentPage === elem ? styles.selectedPage : ""
                }
                onClick={(e) => {
                  this.onPageChanged(elem);
                }}
              >
                {elem}
              </span>
            );
          })}
        </div>
        {/*<button onClick={this.getUsers}>Get Users</button>*/}
        {this.props.users.map((user) => {
          return (
            <div key={user.id}>
              <span>
                <div>
                  {/*<img className={styles.userPhoto} src={user.photoUrl} alt="" />*/}
                  <img
                    className={styles.userPhoto}
                    src={`https://starwars-visualguide.com/assets/img/characters/${user.id}.jpg`}
                    alt=""
                  />
                </div>
                <div>
                  {user.followed ? (
                    <button
                      onClick={() => {
                        this.props.unfollow(user.id);
                      }}
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(user.id);
                      }}
                    >
                      Unfollow
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
  }
}

export default Users;
