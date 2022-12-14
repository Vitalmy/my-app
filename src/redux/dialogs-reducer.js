const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE: let newMessage = state.newMessageText;
        state.messages.push({id: 6, message: newMessage});
        state.newMessageText = "";
          return state;
          case UPDATE_NEW_MESSAGE_TEXT: state.newMessageText = action.newText;
          return state;
          default:
            return state;
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;