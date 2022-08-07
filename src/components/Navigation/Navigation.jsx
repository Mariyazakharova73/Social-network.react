import React from 'react';
import c from '../../blocks/navigation.module.css';

import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={c.navigation}>
      <ul className={c.list}>
        <li className={c.item}><NavLink className = { navData => navData.isActive ? c.active : c.link } to="/profile">
          Profile
        </NavLink>
        </li>
        <li className={c.item}>
          <NavLink className = { navData => navData.isActive ? c.active : c.link } to="/dialogs">
            Dialogs
          </NavLink>
        </li>
        <li className={c.item}>
          <NavLink className = { navData => navData.isActive ? c.active : c.link } to="/news">
            News
          </NavLink>
        </li>
        <li className={c.item}>
          <NavLink className = { navData => navData.isActive ? c.active : c.link } to="/music">
            Music
          </NavLink>
        </li>
        <li className={c.item}>
          <NavLink className = { navData => navData.isActive ? c.active : c.link } to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
