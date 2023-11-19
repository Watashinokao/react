import React, { FC } from 'react';
import classes from './Details.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { charactersAPI } from '../../services/CharactersService';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { dataSlice } from '../../store/redusers/dataSlice';

const Details: FC = () => {
  const { setIsDetails } = dataSlice.actions;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const { data, isFetching } = charactersAPI.useFetchCharacterByIdQuery(
    id || ''
  );
  const { page, isLoadingDetails } = useAppSelector(
    (state) => state.dataReducer
  );
  console.log(
    `isLoadingDetails: ${isLoadingDetails} isFetching: ${isFetching}`
  );

  return (
    <div className={classes.details} data-testid="details">
      {isLoadingDetails ? (
        <p>Loading...</p>
      ) : (
        data && (
          <div className={classes.container}>
            <button
              data-testid="closeBtn"
              className={classes.remove}
              title={`I wish you a New Year's mood`}
              onClick={() => {
                dispatch(setIsDetails(false));
                navigate(`/?page=${page}`);
              }}
            >
              <img src="../src/assets/close.svg" alt="close details" />
            </button>
            <div
              data-testid="detailsBackground"
              className={classes.img}
              style={{
                background: `center no-repeat url(${data.data.imageUrl} )`,
              }}
            ></div>
            <p>Film: {data.data.films[0] || '-'}</p>
            <p>tvShow: {data.data.tvShow || '-'}</p>
            <p>Name: {data.data.name}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Details;
