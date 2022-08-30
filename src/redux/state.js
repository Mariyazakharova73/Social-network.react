const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', count: '15' },
        {
          id: 2,
          message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis explicabo accusantium aperiam officia tenetur obcaecati laboriosam voluptate, maxime neque corporis asperiores, quaerat amet? Delectus autem quaerat eum corrupti itaque!',
          count: '20',
        },
      ],
      newPostText: 'Фиксированный текст',
    },
    dialogsPage: {
      messages: [
        {
          id: 1,
          message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis explicabo accusantium aperiam officia tenetur obcaecati laboriosam voluptate, maxime neque corporis asperiores, quaerat amet? Delectus autem quaerat eum corrupti itaque!',
          link: 'https://images.unsplash.com/photo-1659942546320-297ce58f567a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        },
        {
          id: 2,
          message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis explicabo accusantium aperiam officia tenetur obcaecati laboriosam voluptate, maxime neque corporis asperiores, quaerat amet?',
          link: 'https://images.unsplash.com/photo-1514993805013-c428d7f63ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
          id: 3,
          message: 'Lorem ipsum dolor sit.',
          link: 'https://images.unsplash.com/photo-1661267807600-5e0b45a93bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
      ],
      dialogs: [
        { id: 1, name: 'Mariya' },
        { id: 2, name: 'Pavel' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Pavel' },
        { id: 5, name: 'Mariya' },
        { id: 6, name: 'Dima' },
      ],
      newMessageBody: 'gh',
    },
  },
  //уведомить подписчика
  _callSubscriber() {
    console.log('');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        count: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (x) => ({ type: UPDATE_NEW_POST_TEXT, newText: x });

export const sendMessageCreater = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreater = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;
window.store = store;
