import React from 'react';
import c from '../../blocks/navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={c.navigation}>
      <ul className={c.list}>
        <li className={c.item}><NavLink activeClassName={c.active} className={c.link} to="/profile">
          Profile
        </NavLink>
        </li>
        <li className={c.item}>
          <NavLink activeClassName={c.active} className={c.link} to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li className={c.item}>
          <NavLink className={c.link} to="/news">
            News
          </NavLink>
        </li>
        <li className={c.item}>
          <NavLink className={c.link} to="/music">
            Music
          </NavLink>
        </li>
        <li className={c.item}>
          <NavLink className={c.link} to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
