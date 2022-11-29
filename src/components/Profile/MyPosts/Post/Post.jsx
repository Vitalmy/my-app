import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}> 
      <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" />
     { props.message} 
      <div>
      <span>Like ♥ {props.likesCount} </span>
      </div>
      </div>
  );
};
export default Post;
