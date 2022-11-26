import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post"
const MyPosts = () => {
  return (
      <div>
        my posts
        <div>
          <textarea> </textarea>
          <button>Add Post</button>

           </div>
           <div  className={classes.posts}>
           <Post message = "Hi, how are you?" likes = "12" />
           <Post message = "It's my first post" likes = "67" />
           <Post />
           <Post />
           </div>
    </div>
  );
};
export default MyPosts;
