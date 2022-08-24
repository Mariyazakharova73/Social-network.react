import React from 'react';
import c from './post.module.css';


//console.log(props)
//{message: 'Hi, how are you', count: '15'}
//{message: 'Lorem ipsum dolor sit, amet consectetur adipisicin…amet? Delectus autem quaerat eum corrupti itaque!', count: '20'}

const Post = (props) => {
  return (
    <li className={c.item}>
      <img className={c.newpostimage} src="https://images.unsplash.com/photo-1659678165881-21e80586c5df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="Фото" />
      <p className={c.newposttext}>{props.message}</p>
      <div>
        <span className={c.count}>{props.count}</span>
        <button className={c.like}>like</button>
      </div>
    </li>
  );
};

export default Post;
