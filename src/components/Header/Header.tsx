import React, { Component } from 'react';
import Search from './Search/Search';
import classes from './Header.module.css';
import '../../App.css';

interface HeaderProps {
  handleRequest: (request: string) => void;
}

class Header extends Component<HeaderProps> {
  state = {
    error: false,
  };

  newError = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) {
      throw new Error('Do you want error');
    }
    return (
      <header className={classes.header}>
        <p className={classes.name}>Planets</p>
        <Search handleRequest={this.props.handleRequest} />
        <button className={'button'} onClick={this.newError}>
          Go Error
        </button>
      </header>
    );
  }
}

export default Header;
