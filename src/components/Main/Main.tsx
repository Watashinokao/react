import React, { FC, useContext } from 'react';
import classes from './Main.module.css';
import MainItem from './MainItem/MainItem';
import { useNavigate } from 'react-router-dom';
import { ResultsContext } from '../../Interfaces/Interfaces';

interface MainProps {
  page: number;
  setIsDetails: (state: boolean) => void;
  isDetails: boolean;
}

const Main: FC<MainProps> = (props) => {
  const { results } = useContext(ResultsContext);
  const navigate = useNavigate();
  const goBack = (path: string) => {
    navigate(path);
  };
  return (
    <div
      className={classes.main}
      onClick={() => {
        if (props.isDetails) {
          props.setIsDetails(false);
          goBack(`/?page=${props.page}`);
        }
      }}
    >
      {Array.isArray(results.data) ? (
        results.data.map((item) => (
          <MainItem
            page={props.page}
            setIsDetails={props.setIsDetails}
            key={item._id}
            item={item}
          ></MainItem>
        ))
      ) : (
        <MainItem
          page={props.page}
          setIsDetails={props.setIsDetails}
          key={results.data}
          item={results.data}
        ></MainItem>
      )}
    </div>
  );
};

export default Main;
