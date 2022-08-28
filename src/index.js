import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
  root.render(
      <App state={state} dispatch={store.dispatch.bind(store)} />
  );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
