import React from "react";
import classes from "./MyPosts.module.css";
const MyPosts = () => {
  return (
      <div className={classes.posts}>
        {" "}
        my posts
        <div>
          <textarea> </textarea>
          <button>Add Post</button>
           </div>
      <div className={classes.item}> post 1</div>
      <div className={classes.item}> post 2</div>
    </div>
  );
};
export default MyPosts;
