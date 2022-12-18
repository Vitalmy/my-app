const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl: "https://mir-avatarok.3dn.ru/_si/0/92302704.jpg",
      followed: false,
      fullName: "Dmitry",
      status: "i am a boss",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      photoUrl: "https://mir-avatarok.3dn.ru/_si/0/92302704.jpg",
      followed: true,
      fullName: "Sasha",
      status: "i am a boss too",
      location: { city: "Moscow", country: "Ruska" },
    },
    {
      id: 3,
      photoUrl: "https://mir-avatarok.3dn.ru/_si/0/92302704.jpg",
      followed: false,
      fullName: "Andrew",
      status: "i am a boss too",
      location: { city: "Kiev", country: "Ukraine" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (user) => ({ type: SET_USERS, user });

export default usersReducer;
