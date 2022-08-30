import React from 'react';
import style from './header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.image} src="https://seeklogo.com/images/C/corporate-company-logo-749CEE6ADC-seeklogo.com.png" alt="Логотип" />
    </header>
  );
};

export default Header;
