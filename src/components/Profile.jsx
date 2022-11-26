import React from "react";
import classes from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" />
      </div>
      <div> ava desc</div>
      <div className={classes.posts}>
        {" "}
        my posts
        <div> new post </div>
      <div className={classes.item}> post 1</div>
      <div className={classes.item}> post 2</div>
    </div>
    </div>
  );
};
export default Profile;
