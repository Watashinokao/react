import React, { FC } from 'react';
import classes from './MainItem.module.css';
import { NavLink } from 'react-router-dom';
import { dataSlice } from '../../../store/redusers/dataSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

interface MainItemProps {
  item: Character;
}
interface Character {
  films: string[];
  imageUrl: string;
  name: string;
  _id: number;
}

const MainItem: FC<MainItemProps> = (props) => {
  const { page } = useAppSelector((state) => state.dataReducer);
  const { setIsDetails } = dataSlice.actions;
  const dispatch = useAppDispatch();
  return (
    <NavLink
      data-testid="character"
      to={`/details/${props.item._id}?page=${page}`}
      className={classes.mainItem}
      onClick={() => dispatch(setIsDetails(true))}
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
    </NavLink>
  );
};

export default MainItem;
