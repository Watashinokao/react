import React, { FC } from 'react';
import classes from './Main.module.css';
import MainItem from './MainItem/MainItem';
import { useNavigate } from 'react-router-dom';

interface MainProps {
  results: Character[];
  page: number;
  setIsDetails: (state: boolean) => void;
  isDetails: boolean;
}
interface Character {
  imageUrl: string;
  name: string;
  _id: number;
  films: string[];
  tvShow: string[];
}

const Main: FC<MainProps> = (props) => {
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
      {Array.isArray(props.results) ? (
        props.results.map((item) => (
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
          key={props.results}
          item={props.results}
        ></MainItem>
      )}
    </div>
  );
};

export default Main;
