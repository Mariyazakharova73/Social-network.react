import React from 'react';
import c from './myposts.module.css';
import Post from './Post/Post';

//console.log(props)
//{posts: Array(2), addPost: ƒ}
//

const MyPosts = (props) => {
  let postsElements = props.posts.map((el) => <Post message={el.message} count={el.count} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

  return (
    <div className={c.posts}>
      <div className={c.post}>
        <h2 className={c.title}>My Posts</h2>
        <form className={c.form}>
          <textarea ref={newPostElement} className={c.text} type="text" placeholder="Your news"></textarea>
          <button onClick={addPost} className={c.button} type="submit">
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
