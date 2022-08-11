import './index.css';
import reportWebVitals from './reportWebVitals';
import renderEntireTree from './render.js'
import state from './redux/state.js'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App state = {state} addPost={addPost}/>
//   </React.StrictMode>
// );

// export let renderEntireTree=()=>{
//   const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App state = {state} addPost={addPost}/>
//   </React.StrictMode>
// );
// }
renderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();