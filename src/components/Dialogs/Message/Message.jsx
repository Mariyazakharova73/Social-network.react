import React from 'react';
import c from './../dialogs.module.css';

//{message: 'Lorem ipsum dolor sit, amet consectetur adipisicin…amet? Delectus autem quaerat eum corrupti itaque!', link: 'https://images.unsplash.com/photo-1659942546320-29…lfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'}
//{message: 'Lorem ipsum dolor sit, amet consectetur adipisicin…, maxime neque corporis asperiores, quaerat amet?', link: 'https://images.unsplash.com/photo-1659942546320-29…lfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'}
//{message: 'Lorem ipsum dolor sit.', link: 'https://images.unsplash.com/photo-1659942546320-29…lfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'}

const Message = (props) => {
  return (
    <li className={c.message}>
      <img className={c.image} src={props.link} alt="Фото" />
      <p className={c.text}>{props.message}</p>
    </li>
  );
};

export default Message;