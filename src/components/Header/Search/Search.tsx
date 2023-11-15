import React, { FC, useContext, useState } from 'react';
import classes from './Search.module.css';
import '../../../index.css';
import { RequestContext } from '../../../Interfaces/Interfaces';

const Search: FC = () => {
  const { request, setRequest } = useContext(RequestContext);
  const [newRequest, setNewRequest] = useState(request || '');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewRequest(e.target.value);
  }
  return (
    <div className={classes.search}>
      <input
        autoFocus={true}
        className={classes.input}
        type={'text'}
        value={newRequest}
        placeholder={'your request...queen, belle and other'}
        onChange={handleChange}
      />
      <button
        data-testid="search-btn"
        onClick={() => {
          setRequest(newRequest);
          localStorage.setItem('prevRequest', newRequest.trim());
        }}
        className={'button'}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
