import React, { Component } from 'react';
import classes from './Search.module.css';

class Search extends Component {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ request: e.target.value });
  };

  render() {
    return (
      <div className={classes.search}>
        <input
          autoFocus={true}
          className={classes.input}
          type={'text'}
          placeholder={'your request...'}
          onChange={this.handleChange}
        />
        <button className={classes.button}>Search</button>
      </div>
    );
  }
}

export default Search;
