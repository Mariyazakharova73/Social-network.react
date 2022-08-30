import React from 'react';
import style from './navigation.module.css';
import {NavLink} from "react-router-dom";

//NavLink вместо a, to вместо href
const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        <li className={style.item}><NavLink className = { navData => navData.isActive ? style.active : style.link } to="/profile">
          Profile
        </NavLink>
        </li>
        <li className={style.item}>
          <NavLink className = { navData => navData.isActive ? style.active : style.link } to="/dialogs">
            Dialogs
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink className = { navData => navData.isActive ? style.active : style.link } to="/news">
            News
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink className = { navData => navData.isActive ? style.active : style.link } to="/music">
            Music
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink className = { navData => navData.isActive ? style.active : style.link } to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
