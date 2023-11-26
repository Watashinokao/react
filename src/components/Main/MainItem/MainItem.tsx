import React, { FC } from 'react';
import classes from './MainItem.module.css';
import { Character } from '../../../Interfaces/Interfaces';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface MainItemProps {
  item: Character;
}

const MainItem: FC<MainItemProps> = (props) => {
  const router = useRouter();
  const page = router.query.page;
  const name = router.query.name;
  const pageSize = router.query.pageSize;
  return (
    <Link
      href={
        router.pathname === '/details/[id]'
          ? `/?page=${page}&pageSize=${
              pageSize ? String(pageSize) : '10'
            }&name=${name ? String(name) : ''}`
          : `/details/${props.item._id}?page=${
              page ? String(page) : '1'
            }&pageSize=${pageSize ? String(pageSize) : '10'}&name=${
              name ? String(name) : ''
            }`
      }
      data-testid="character"
      className={classes.mainItem}
    >
      <div
        data-testid="background"
        className={classes.img}
        style={{
          background: `center no-repeat url(${props.item.imageUrl} )`,
          backgroundSize: 'contain',
        }}
      ></div>
      <p className={classes.name}>{props.item.name}</p>
    </Link>
  );
};

export default MainItem;
