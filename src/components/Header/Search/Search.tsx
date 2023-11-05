import React, { FC, useState } from 'react';
import classes from './Search.module.css';
import '../../../App.css';

interface SearchProps {
  handleRequest: (request: string) => void;
}

const Search: FC<SearchProps> = (props) => {
  const [request, setRequest] = useState(
    localStorage.getItem('prevRequest') || ''
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRequest(e.target.value);
  }

  return (
    <div className={classes.search}>
      <input
        autoFocus={true}
        className={classes.input}
        type={'text'}
        value={request}
        placeholder={'your planet... (Naboo, Hoth and other)'}
        onChange={handleChange}
      />
      <button onClick={() => props.handleRequest(request)} className={'button'}>
        Search
      </button>
    </div>
  );
};

export default Search;
