import React from 'react';
import style from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';

//{posts: Array(2), addPost: ƒ}
const Profile = (props) => {
  return (
    <div>
      <div className={style.wrapper}>
        <img className={style.image} src="https://images.unsplash.com/photo-1659584079553-c300cb85f10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Водопад" />
      </div>
      <div className={style.info}>
        <img className={style.avatar} src="https://images.unsplash.com/photo-1659779430974-b01bc7563f41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Аватар" />
        <div className={style.container}>
          <p className={style.name}>Мария З.</p> 
          <p className={style.paragraph}>Дата рождения: 6 сентября</p>
          <p className={style.paragraph}>Город: Ульяносвск</p>
          <p className={style.paragraph}>Образование: УлГТУ</p>
        </div>
      </div>
      <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
