import renderEntireTree from '../render.js'

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', count: '15' },
      { id: 2, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis explicabo accusantium aperiam officia tenetur obcaecati laboriosam voluptate, maxime neque corporis asperiores, quaerat amet? Delectus autem quaerat eum corrupti itaque!', count: '20' },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis explicabo accusantium aperiam officia tenetur obcaecati laboriosam voluptate, maxime neque corporis asperiores, quaerat amet? Delectus autem quaerat eum corrupti itaque!', link: 'https://images.unsplash.com/photo-1659942546320-297ce58f567a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' },
      { id: 2, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis explicabo accusantium aperiam officia tenetur obcaecati laboriosam voluptate, maxime neque corporis asperiores, quaerat amet?', link: 'https://images.unsplash.com/photo-1514993805013-c428d7f63ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
      { id: 3, message: 'Lorem ipsum dolor sit.', link: 'https://images.unsplash.com/photo-1661267807600-5e0b45a93bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
    ],
    dialogs: [
      { id: 1, name: 'Mariya' },
      { id: 2, name: 'Pavel' },
      { id: 3, name: 'Dima' },
      { id: 4, name: 'Pavel' },
      { id: 5, name: 'Mariya' },
      { id: 6, name: 'Dima' },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    count: 0,
  };
  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
};

export default state;
