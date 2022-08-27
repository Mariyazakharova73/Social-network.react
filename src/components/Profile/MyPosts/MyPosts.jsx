import React from 'react';
import c from './myposts.module.css';
import Post from './Post/Post';
import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../redux/state.js'
//console.log(props)
//{posts: Array(2), addPost: ƒ}
//

const MyPosts = (props) => {
  let postsElements = props.posts.map((el, index) => <Post message={el.message} count={el.count} key={index} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreater());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreater(text));
  };

  return (
    <div className={c.posts}>
      <div className={c.post}>
        <h2 className={c.title}>My Posts</h2>
        <form className={c.form}>
          <textarea ref={newPostElement} className={c.text} type="text" placeholder="Your news" value={props.newPostText} onChange={onPostChange} />

          <button onClick={addPost} className={c.button} type="button">
            Send
          </button>
        </form>
      </div>
      <div className={c.newpostcontainer}>
        <ul className={c.list}>{postsElements}</ul>
      </div>
    </div>
  );
};

export default MyPosts;
