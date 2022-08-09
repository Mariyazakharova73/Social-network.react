import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  { id: 1, message: 'Hi, how are you', count: '15' },
  { id: 2, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis explicabo accusantium aperiam officia tenetur obcaecati laboriosam voluptate, maxime neque corporis asperiores, quaerat amet? Delectus autem quaerat eum corrupti itaque!', count: '20' },
]; 

let dialogs = [
  { id: 1, name: 'Mariya' },
  { id: 2, name: 'Pavel' },
  { id: 3, name: 'Dima' },
  { id: 4, name: 'Pavel' },
  { id: 5, name: 'Mariya' },
  { id: 6, name: 'Dima' },
];

let messages = [
  { id: 1, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis explicabo accusantium aperiam officia tenetur obcaecati laboriosam voluptate, maxime neque corporis asperiores, quaerat amet? Delectus autem quaerat eum corrupti itaque!', link: 'https://images.unsplash.com/photo-1659942546320-297ce58f567a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' },
  { id: 2, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis explicabo accusantium aperiam officia tenetur obcaecati laboriosam voluptate, maxime neque corporis asperiores, quaerat amet?', link: 'https://images.unsplash.com/photo-1659942546320-297ce58f567a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' },
  { id: 3, message: 'Lorem ipsum dolor sit.', link: 'https://images.unsplash.com/photo-1659942546320-297ce58f567a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' },
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();