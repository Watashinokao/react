import './RootLayout.module.css';
import '../../index.css';
import React, { FC, useEffect } from 'react';

import Header from '../Header/Header';
import Pagination from '../Pagination/Pagination';
import Main from '../Main/Main';
import { Outlet, useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { dataSlice } from '../../store/redusers/dataSlice';
import { charactersAPI } from '../../services/CharactersService';

const RootLayout: FC = () => {
  const dispatch = useAppDispatch();

  const { setIsLoadingCards } = dataSlice.actions;
  const { page, pageSize, isDetails, request, isLoadingCards } = useAppSelector(
    (state) => state.dataReducer
  );
  const { data, isError, isFetching } =
    charactersAPI.useFetchAllCharactersQuery({
      name: `${request}`,
      page: `${page}`,
      pageSize: `${pageSize}`,
    });

  dispatch(setIsLoadingCards(isFetching));
  const [, setSearch] = useSearchParams();

  useEffect(() => {
    setSearch({
      page: `${page}`,
    });
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isError) {
    throw new Error('Error server');
  }
  return (
    <div className={'app'}>
      <Header />
      {isLoadingCards ? (
        <img
          className={'loading'}
          src="/src/assets/loading.gif"
          alt={'loading'}
        />
      ) : data && data.info.count ? (
        <>
          <Pagination />
          <div className={isDetails ? 'open-details' : ''}>
            <Main results={data.data} />
            <Outlet />
          </div>
        </>
      ) : (
        <p>Request not found</p>
      )}
    </div>
  );
};

export default RootLayout;
