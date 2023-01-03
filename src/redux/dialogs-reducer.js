const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-cam" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yoo" },
    { id: 5, message: "Wow" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: newMessage }],
      };
    default:
      return state;
  }
};
export const addMessageActionCreator = (newMessageText) => ({
  type: ADD_MESSAGE,
  newMessageText,
});

export default dialogsReducer;
