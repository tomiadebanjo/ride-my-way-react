import React from 'react';
import classes from  './style.scss';

const Header = () => (
  <header className={classes.header}>
    <a href="/" className={classes.brand}>Ride My Way</a>
    <nav>
      <ul className={classes.menu}>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Sign-Up</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
