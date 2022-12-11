let state = {
    profilePage : {
    posts: [
        {id: 1, message: 'Hi, how are you mm?', likesCount:12},
        {id: 2, message: 'It\'s my first post', likesCount:11},
      ]},
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
      ]
    }
};
export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

state.profilePage.posts.push(newPost)
}
export default state