import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => {
    return <Post message={post.message} likesCount={post.likesCount} />;
  });

  let newPostElem = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElem.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElem}
            value={props.newPostText}
            name=""
            cols="30"
            rows="2"
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
