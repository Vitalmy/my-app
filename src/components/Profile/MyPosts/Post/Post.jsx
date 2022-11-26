import React from "react";
import classes from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={classes.item}> 
      <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" />
     { props.message} 
      <div>
      <span>Like ♥ {props.likes} </span>
      </div>
      </div>
  );
};
export default Post;
