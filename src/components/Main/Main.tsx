import React, { FC } from 'react';
import classes from './Main.module.css';
import MainItem from './MainItem/MainItem';
import { useNavigate } from 'react-router-dom';
import { MainProps } from '../../Interfaces/Interfaces';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { dataSlice } from '../../store/redusers/dataSlice';

const Main: FC<MainProps> = (props) => {
  const { page, isDetails } = useAppSelector((state) => state.dataReducer);
  const dispatch = useAppDispatch();
  const { setIsDetails } = dataSlice.actions;
  // const { results } = useContext(ResultsContext);
  const navigate = useNavigate();
  const goBack = (path: string) => {
    navigate(path);
  };
  return (
    <div
      className={classes.main}
      onClick={() => {
        if (isDetails) {
          dispatch(setIsDetails(false));
          goBack(`/?page=${page}`);
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
