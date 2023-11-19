import React, { FC, useState } from 'react';
import classes from './Search.module.css';
import '../../../index.css';
import { dataSlice } from '../../../store/redusers/dataSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

const Search: FC = () => {
  const { setRequest } = dataSlice.actions;
  const dispatch = useAppDispatch();
  const { request } = useAppSelector((state) => state.dataReducer);
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
          dispatch(setRequest(newRequest));
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
