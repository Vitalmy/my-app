import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { AddNewPostFormRedux } from "./AddNewPostForm";

const MyPosts = React.memo((props) => {
  let postsElements = [...props.posts]
    .reverse()
    .map((p) => <Post message={p.message} likesCount={p.likesCount} />);
  let onAddPost = (values) => {
    props.addPost(values.NewPostText);
  };
  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
