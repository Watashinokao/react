import React, { FC, useState } from 'react';
import classes from './Main.module.css';
import MainItem from './MainItem/MainItem';

interface MainProps {
  results: Character[];
}
interface Character {
  imageUrl: string;
  name: string;
  _id: number;
  films: string[];
  tvShow: string[];
}

const Main: FC<MainProps> = (props) => {
  const [data, setData] = useState<Character>({
    films: [],
    name: '',
    imageUrl: '',
    _id: 0,
    tvShow: [],
  });
  function fetchCharacter(id: number) {
    fetch(`https://api.disneyapi.dev/character/${id}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData({
          films: result.data.films,
          name: result.data.name,
          imageUrl: result.data.imageUrl,
          _id: result.data._id,
          tvShow: result.data.tvShow,
        });
      });
    console.log(data);
  }
  return (
    <div className={classes.main}>
      {props.results.map((item) => (
        <MainItem
          key={item._id}
          fetchCharacter={fetchCharacter}
          item={item}
        ></MainItem>
      ))}
    </div>
  );
};

export default Main;
