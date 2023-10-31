import React, { Component } from 'react';
import classes from './Search.module.css';
import '../../../App.css';

interface SearchProps {
  handleRequest: (request: string) => void;
}

interface SearchState {
  request: string;
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      request: '',
    };
  }

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
          placeholder={'your planet... (Naboo, Hoth and other)'}
          onChange={this.handleChange}
        />
        <button
          onClick={() => this.props.handleRequest(this.state.request)}
          className={'button'}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
