import React, { FC, useState } from 'react';
import Search from './Search/Search';
import classes from './Header.module.css';
import '../../App.css';

interface HeaderProps {
  handleRequest: (request: string) => void;
}

const Header: FC<HeaderProps> = (props) => {
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
      <Search handleRequest={props.handleRequest} />
      <button className={'button'} onClick={newError}>
        Go Error
      </button>
    </header>
  );
};

export default Header;
