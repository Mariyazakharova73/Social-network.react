import React from 'react';
import style from './myposts.module.css';
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
    <div className={style.posts}>
      <div className={style.post}>
        <h2 className={style.title}>My Posts</h2>
        <form className={style.form}>
          <textarea ref={newPostElement} className={style.text} type="text" placeholder="Your news" value={props.newPostText} onChange={onPostChange} />

          <button onClick={addPost} className={style.button} type="button">
            Send
          </button>
        </form>
      </div>
      <div className={style.newpostcontainer}>
        <ul className={style.list}>{postsElements}</ul>
      </div>
    </div>
  );
};

export default MyPosts;
