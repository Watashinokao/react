import React, { FC } from 'react';
import classes from './Main.module.css';
import MainItem from './MainItem/MainItem';
import { MainProps } from '../../Interfaces/Interfaces';
import { useRouter } from 'next/router';

const Main: FC<MainProps> = (props) => {
  const router = useRouter();
  const page = router.query.page;
  const pageSize = router.query.pageSize;
  const name = router.query.name;
  return (
    <div
      className={classes.main}
      onClick={() => {
        if (router.pathname === '/details/[id]') {
          router.push({
            pathname: '/',
            query: {
              page: page ? String(page) : '1',
              pageSize: pageSize ? String(pageSize) : '10',
              name: name ? String(name) : '',
            },
          });
        }
      }}
    >
      {Array.isArray(props.results) ? (
        props.results.map((item) => (
          <MainItem key={item._id} item={item}></MainItem>
        ))
      ) : (
        <MainItem key={props.results._id} item={props.results}></MainItem>
      )}
    </div>
  );
};

export default Main;
