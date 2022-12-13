let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you mm?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
      ],
      newPostText: "it-cam.com",
    },
    dialogsPage: {
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
      newMessageText: "vvedi",
    },
  },
  getState() {
    return this._state;
  },
  _rerenderEntireTree() {},
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText,
    };

    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._rerenderEntireTree(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
};

export default store;
window.store = store;