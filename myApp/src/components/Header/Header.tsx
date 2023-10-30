import React, { Component } from 'react';
import Search from './Search/Search';
import classes from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={classes.header}>
        <Search />
      </header>
    );
  }
}

export default Header;
