import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => {
    return (
      <Post message={post.message} likesCount={post.likesCount} key={post.id} />
    );
  });

  let newPostElem = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElem.current.value;
    props.updateNewPostText(text);
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
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
