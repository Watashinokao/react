import React, { FC } from 'react';
import classes from './MainItem.module.css';
import { NavLink } from 'react-router-dom';

interface MainItemProps {
  item: Character;
  setIsDetails: (state: boolean) => void;
}
interface Character {
  films: string[];
  imageUrl: string;
  name: string;
  _id: number;
}

const MainItem: FC<MainItemProps> = (props) => {
  return (
    <NavLink
      to={`details/${props.item._id}`}
      className={classes.mainItem}
      onClick={() => props.setIsDetails(true)}
    >
      <div
        className={classes.img}
        style={{
          background: `center no-repeat url(${props.item.imageUrl} )`,
          backgroundSize: 'contain',
        }}
      ></div>
      <p className={classes.name}>{props.item.name}</p>
    </NavLink>
  );
};

export default MainItem;
