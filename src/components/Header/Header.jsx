import React from 'react';
import c from './header.module.css'

const Header = () => {
  return (
    <header className={c.header}>
      <img className={c.image} src="https://seeklogo.com/images/C/corporate-company-logo-749CEE6ADC-seeklogo.com.png" alt="Логотип" />
    </header>
  );
};

export default Header;
