import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post"
const MyPosts = () => {
  return (
      <div className={s.postBlock}>
       <h3>My posts</h3>
        <div>
          <div>
          <textarea> </textarea>
          </div>
          <div>
          <button>Add Post</button>
          </div>
           </div>
           <div  className={s.posts}>
           <Post message = "Hi, how are you?" likes = "12" />
           <Post message = "It's my first post" likes = "67" />
           <Post />
           <Post />
           </div>
    </div>
  );
};
export default MyPosts;
