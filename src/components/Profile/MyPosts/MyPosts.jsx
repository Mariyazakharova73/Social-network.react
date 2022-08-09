import React from 'react';
import c from './myposts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
let postsElements = props.posts.map(el=> <Post message={el.message} count={el.count} />)

  return (
    <div className={c.posts}>
      <div className={c.post}>
        <h2 className={c.title}>My Posts</h2>
        <form className={c.form}>
          <input className={c.text} type="text" placeholder="Your news" />
          <button className={c.button} type="submit">
            Send
          </button>
        </form>
      </div>
      <div className={c.newpostcontainer}>
        <ul className={c.list}>
        { postsElements }
        </ul>
      </div>
    </div>
  );
};

export default MyPosts;
