import React from 'react';
import './Header.css';

function Header({ title, subtitle }) {
  return (
    <header className="header fade-in">
      <div className="container">
        <h1 className="header-title">{title}</h1>
        {subtitle && <p className="header-subtitle">{subtitle}</p>}
      </div>
    </header>
  );
}

export default Header;