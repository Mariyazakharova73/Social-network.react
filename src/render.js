import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import state from './redux/state.js'
import {addPost} from './redux/state.js'

 let renderEntireTree=(state)=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state = {state} addPost={addPost}/>
  </React.StrictMode>
);
}

export default renderEntireTree;