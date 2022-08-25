import './index.css';
import reportWebVitals from './reportWebVitals';
import renderEntireTree from './render.js';
import state from './redux/state.js';

renderEntireTree(state);
reportWebVitals();

// export let renderEntireTree = ()=> {
//   const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App state = {state} addPost={addPost}/>
//   </React.StrictMode>
// );
// }
