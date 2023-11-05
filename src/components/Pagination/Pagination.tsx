import React, { FC } from 'react';

interface PaginationProps {
  page: number;
  handlePage: (page: string) => void;
  handlePageSize: (size: number) => void;
  info: {
    count: number;
    nextPage: string;
    previousPage: string;
    totalPages: number;
  };
}
const Pagination: FC<PaginationProps> = (props) => {
  return (
    <div className={'pagination'}>
      <button onClick={() => props.handlePage('prev')}>Prev</button>
      <div>{props.page}</div>
      <button onClick={() => props.handlePage('next')}>Next</button>
      <p>Count element:</p>
      <button onClick={() => props.handlePageSize(5)}>5</button>
      <button onClick={() => props.handlePageSize(10)}>10</button>
      <button onClick={() => props.handlePageSize(20)}>20</button>
      <button onClick={() => props.handlePageSize(30)}>30</button>
    </div>
  );
};

export default Pagination;
