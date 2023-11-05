import React, { FC } from 'react';
import classes from './MainItem.module.css';

interface MainItemProps {
  item: Character;
  fetchCharacter: (id: number) => void;
}
interface Character {
  films: string[];
  imageUrl: string;
  name: string;
  _id: number;
}

const MainItem: FC<MainItemProps> = (props) => {
  return (
    <div
      className={classes.mainItem}
      onClick={() => props.fetchCharacter(props.item._id)}
    >
      <div
        className={classes.img}
        style={{
          background: `center no-repeat url(${props.item.imageUrl} )`,
          backgroundSize: 'contain',
        }}
      ></div>
      <p className={classes.name}>{props.item.name}</p>
    </div>
  );
};

export default MainItem;
