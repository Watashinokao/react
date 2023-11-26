import React, { FC, useState } from 'react';
import classes from './Search.module.css';
import { useRouter } from 'next/router';

const Search: FC = () => {
  const router = useRouter();
  const name = router.query.name;
  const pageSize = router.query.pageSize;
  const page = router.query.page;
  const [newRequest, setNewRequest] = useState(name ? name : '');

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
          router.push({
            pathname: '/',
            query: {
              page: page,
              pageSize: pageSize ? String(pageSize) : '10',
              name: newRequest,
            },
          });
        }}
        className={'button'}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
