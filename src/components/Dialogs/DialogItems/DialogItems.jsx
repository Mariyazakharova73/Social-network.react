import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './../dialogs.module.css';


const DialogItem = (props) => {
  return (
    <li className={c.item}>
      <NavLink className={c.link} to={'/dialogs/' + props.id}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogItem;