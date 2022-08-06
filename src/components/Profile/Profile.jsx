import React from 'react';
import c from '../../blocks/profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={c.profile}>
      <div className={c.wrapper}>
        <img className={c.image} src="https://images.unsplash.com/photo-1659584079553-c300cb85f10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Водопад" />
      </div>
      <div className={c.info}>
        <img className={c.avatar} src="https://images.unsplash.com/photo-1659779430974-b01bc7563f41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Аватар" />
        <div className={c.container}>
          <p className={c.name}>Мария З.</p>
          <p className={c.paragraph}>Дата рождения: 6 сентября</p>
          <p className={c.paragraph}>Город: Ульяносвск</p>
          <p className={c.paragraph}>Образование: УлГТУ</p>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
