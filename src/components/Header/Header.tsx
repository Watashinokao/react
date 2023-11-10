import React, { FC, useState } from 'react';
import Search from './Search/Search';
import classes from './Header.module.css';
import '../RootLayout/RootLayout.module.css';

const Header: FC = () => {
  const [error, setError] = useState(false);
  const newError = () => {
    setError(true);
  };

  if (error) {
    throw new Error('Do you want error');
  }
  return (
    <header className={classes.header}>
      <p className={classes.name}>Disney character</p>
      <Search />
      <button className={'button'} onClick={newError}>
        Go Error
      </button>
    </header>
  );
};

export default Header;
