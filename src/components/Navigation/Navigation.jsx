import React from 'react';
import c from '../../blocks/navigation.module.css';

const Navigation = () => {
  return (
    <nav className={c.navigation}>
      <ul className={c.list}>
        <li className={c.item}>
          <a className={c.link} href="#">
            Profile
          </a>
        </li>
        <li className={c.item}>
          <a className={c.link} href="#">
            Messages
          </a>
        </li>
        <li className={c.item}>
          <a className={c.link} href="#">
            News
          </a>
        </li>
        <li className={c.item}>
          <a className={c.link} href="#">
            Music
          </a>
        </li>
        <li className={c.item}>
          <a className={c.link} href="#">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
