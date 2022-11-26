import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"
const MyPosts = () => {
  return (
      <div className={classes.posts}>
        {" "}
        my posts
        <div>
          <textarea> </textarea>
          <button>Add Post</button>
           </div>
           <Post />
           <Post />
           <Post />
           <Post />
    </div>
  );
};
export default MyPosts;
