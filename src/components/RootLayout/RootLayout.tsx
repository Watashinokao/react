import './RootLayout.module.css';
import '../../index.css';
import React, { FC, useContext, useEffect, useState } from 'react';

import Header from '../Header/Header';
import Pagination from '../Pagination/Pagination';
import Main from '../Main/Main';
import { Outlet, useSearchParams } from 'react-router-dom';
import {
  RequestContext,
  Results,
  ResultsContext,
} from '../../Interfaces/Interfaces';

const RootLayout: FC = () => {
  const { request } = useContext(RequestContext);
  const { setResults } = useContext(ResultsContext);
  const [isDetails, setIsDetails] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(
    Number(useSearchParams()[0].get('page'))
  );
  const [, setSearch] = useSearchParams();

  function fetchRequest(request: string, page: number, pageSize: number) {
    fetch(
      `https://api.disneyapi.dev/character?name=${request}&page=${page}&pageSize=${pageSize}`
    )
      .then((res) => res.json())
      .then((result: Results) => {
        const { info, data } = result;
        setResults({
          data: data,
          info: {
            count: info.count,
            nextPage: info.nextPage,
            previousPage: info.previousPage,
            totalPages: info.totalPages,
          },
        });

        setIsLoaded(true);
        setError(false);
        if (result.info.count === 0) {
          setError(true);
          localStorage.setItem('prevRequest', '');
        }
      })
      .catch(() => {
        setIsLoaded(true);
        setError(true);
      });
  }
  useEffect(() => {
    setSearch({
      page: `${page}`,
    });
    const prevRequest = request;
    setIsLoaded(false);
    fetchRequest(prevRequest || '', page, pageSize);
  }, [request, page, pageSize]); // eslint-disable-line react-hooks/exhaustive-deps

  function handlePage(page: string) {
    switch (page) {
      case 'next':
        setPage((count) => count + 1);
        break;
      case 'prev':
        setPage((count) => count - 1);
        break;
    }
  }
  function handlePageSize(size: number) {
    setPageSize((count) => count + size - count);
    setPage(1);
  }
  function handleDetails() {
    setIsDetails(false);
  }
  if (error) {
    throw new Error('Request not found');
  }

  return (
    <div className={'app'}>
      <Header />
      {!isLoaded ? (
        <img
          className={'loading'}
          src="/src/assets/loading.gif"
          alt={'loading'}
        />
      ) : (
        <>
          <Pagination
            handlePage={handlePage}
            page={page}
            pageSize={pageSize}
            handlePageSize={handlePageSize}
          />
          <div className={isDetails ? 'open-details' : ''}>
            <Main
              setIsDetails={setIsDetails}
              page={page}
              isDetails={isDetails}
            />
            <Outlet context={{ handleDetails, page }}></Outlet>
          </div>
        </>
      )}
    </div>
  );
};

export default RootLayout;
