import React, { FC, useEffect, useState } from 'react';
import classes from './Details.module.css';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { Character } from '../../Interfaces/Interfaces';
import { ContextOutlet } from '../../Interfaces/Interfaces';

const Details: FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(true);
  const context = useOutletContext<ContextOutlet>();
  const navigate = useNavigate();

  const { id } = useParams();
  const [data, setData] = useState<Character>({
    films: [],
    name: '',
    imageUrl: '',
    _id: 0,
    tvShow: [],
  });
  useEffect(() => {
    setIsLoaded(true);
    detailsLoader(id).then((res: Character) => {
      setData(res);
      setIsLoaded(false);
    });
  }, [id]);
  function detailsLoader(id: string | undefined) {
    return fetch(`https://api.disneyapi.dev/character/${id}`)
      .then((res) => res.json())
      .then((result): Character => {
        const { data } = result;
        return {
          tvShow: data.tvShow,
          films: data.films,
          imageUrl: data.imageUrl,
          _id: data.id,
          name: data.name,
        };
      });
  }

  return (
    <div className={classes.details} data-testid="details">
      {isLoaded ? (
        <p>Loading...</p>
      ) : (
        <div className={classes.container}>
          <button
            data-testid="closeBtn"
            className={classes.remove}
            title={`I wish you a New Year's mood`}
            onClick={() => {
              context.handleDetails();
              navigate(`/?page=${context.page}`);
            }}
          >
            <img src="../src/assets/close.svg" alt="close details" />
          </button>
          <div
            data-testid="detailsBackground"
            className={classes.img}
            style={{
              background: `center no-repeat url(${data.imageUrl} )`,
            }}
          ></div>
          <p>Film: {data.films[0] || '-'}</p>
          <p>tvShow: {data.tvShow || '-'}</p>
          <p>Name: {data.name}</p>
        </div>
      )}
    </div>
  );
};

export default Details;
