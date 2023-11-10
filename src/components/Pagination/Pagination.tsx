import React, { FC, useContext } from 'react';
import { PaginationProps, ResultsContext } from '../../Interfaces/Interfaces';
const Pagination: FC<PaginationProps> = (props) => {
  const { results } = useContext(ResultsContext);
  return (
    <div className={'pagination'}>
      <button
        onClick={() => props.handlePage('prev')}
        disabled={props.page <= 1}
      >
        Prev
      </button>
      <div>{props.page}</div>
      <button
        onClick={() => props.handlePage('next')}
        disabled={props.page >= results.info.totalPages}
      >
        Next
      </button>
      <p>Elements quantity:</p>
      <select
        value={props.pageSize}
        className="select"
        onChange={(e) => props.handlePageSize(Number(e.target.value))}
      >
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
      </select>
    </div>
  );
};

export default Pagination;
