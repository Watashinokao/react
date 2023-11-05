import './App.css';
import React, { FC, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Pagination from './components/Pagination/Pagination';

interface Character {
  imageUrl: string;
  name: string;
  _id: number;
  films: string[];
  tvShow: string[];
}
interface MainProps {
  data: Character[];
  info: {
    count: number;
    nextPage: string;
    previousPage: string;
    totalPages: number;
  };
}

const App: FC = () => {
  const [request, setRequest] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [results, setResults] = useState<MainProps>({
    data: [],
    info: {
      count: 0,
      nextPage: '',
      previousPage: '',
      totalPages: 0,
    },
  });

  useEffect(() => {
    const prevRequest = localStorage.getItem('prevRequest');
    setRequest(prevRequest || '');
    setIsLoaded(false);
    fetchRequest(prevRequest || '', page, pageSize);
  }, [request, page, pageSize]);

  function fetchRequest(request: string, page: number, pageSize: number) {
    console.log(request, page, pageSize);
    fetch(
      `https://api.disneyapi.dev/character?name=${request}&page=${page}&pageSize=${pageSize}`
    )
      .then((res) => res.json())
      .then((result: MainProps) => {
        const { info, data } = result;
        console.log(page);

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
      })
      .catch(() => {
        setIsLoaded(true);
        setError(true);
      });
  }
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
  }
  function handleRequest(request: string) {
    setRequest(request);
    localStorage.setItem('prevRequest', request.trim());
  }
  if (error) {
    throw new Error('Error Server');
  }
  return (
    <div className={'app'}>
      <Header handleRequest={handleRequest} />
      {!isLoaded ? (
        <img
          className={'loading'}
          src="../src/assets/loading.gif"
          alt={'loading'}
        />
      ) : (
        <>
          <Pagination
            info={results.info}
            handlePage={handlePage}
            page={page}
            handlePageSize={handlePageSize}
          />
          <Main results={results.data} />
        </>
      )}
    </div>
  );
};

export default App;
