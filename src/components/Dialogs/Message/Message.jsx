import React from 'react';
import c from './../dialogs.module.css';

const Message = (props) => {
  return (
    <li className={c.message}>
      <img className={c.image} src={props.link} alt="Фото" />
      <p className={c.text}>{props.message}</p>
    </li>
  );
};

export default Message;