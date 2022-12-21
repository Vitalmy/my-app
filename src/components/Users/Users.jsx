import axios from "axios";
import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/avatar.jpg";

// [
//   {
//     id: 1,
//     photoUrl: "https://avatar-collection.ru/images/avatar-687.jpg",
//     followed: false,
//     fullName: "Dmitry",
//     status: "i am a boss",
//     location: { city: "Minsk", country: "Belarus" },
//   },
//   {
//     id: 2,
//     photoUrl: "https://avatar-collection.ru/images/avatar-687.jpg",
//     followed: true,
//     fullName: "Sasha",
//     status: "i am a boss too",
//     location: { city: "Moscow", country: "Russia" },
//   },
//   {
//     id: 3,
//     photoUrl: "https://avatar-collection.ru/images/avatar-687.jpg",
//     followed: false,
//     fullName: "Dmitry",
//     status: "i am a boss too",
//     location: { city: "Pinsk", country: "Belarus" },
//   },
// ]

let Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };
  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                className={styles.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
