import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { addPost, updatenewPostText } from './redux/state.js';
import state from './redux/state.js';
import { subscribe } from './redux/state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updatenewPostText={updatenewPostText} />
    </React.StrictMode>
  );
};

renderEntireTree(state);
reportWebVitals();
subscribe(renderEntireTree);
// export let renderEntireTree = ()=> {
//   const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App state = {state} addPost={addPost}/>
//   </React.StrictMode>
// );
// }
