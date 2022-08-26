import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './redux/state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
};

renderEntireTree(store.getState());

reportWebVitals();

store.subscribe(renderEntireTree);
// export let renderEntireTree = ()=> {
//   const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App state = {state} addPost={addPost}/>
//   </React.StrictMode>
// );
// }
