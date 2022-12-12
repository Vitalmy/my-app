import { rerenderEntireTree } from "../render";

let state = {
    profilePage : {
    posts: [
        {id: 1, message: 'Hi, how are you mm?', likesCount:12},
        {id: 2, message: 'It\'s my first post', likesCount:11}],
    newPostText: 'it-cam.com'},
    dialogsPage: {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
      ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-cam'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yoo'},
        {id: 5, message: 'Wow'},
      ],
      newMessageText: 'vvedi'
    }
};
export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

state.profilePage.posts.push(newPost);
state.profilePage.newPostText = '';
rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
state.profilePage.newPostText = newText;
rerenderEntireTree(state);
}

export let addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText,
  };

state.dialogsPage.messages.push(newMessage);
state.dialogsPage.newMessageText = '';
rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
state.dialogsPage.newMessageText = newText;
rerenderEntireTree(state);
}
export default state