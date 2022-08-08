import React from 'react';
import c from './myposts.module.css';
import Post from './Post/Post';

let postData = [
  { id: 1, message: 'Hi, how are you', count: '15' },
  { id: 2, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis explicabo accusantium aperiam officia tenetur obcaecati laboriosam voluptate, maxime neque corporis asperiores, quaerat amet? Delectus autem quaerat eum corrupti itaque!', count: '20' },
];

const MyPosts = () => {
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
          <Post message={postData[0].message} count={postData[0].count} />
          <Post message={postData[1].message} count={postData[1].count} />
        </ul>
      </div>
    </div>
  );
};

export default MyPosts;
