import React, { FC } from 'react';
import { PaginationProps } from '../../Interfaces/Interfaces';
const Pagination: FC<PaginationProps> = (props) => {
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
        disabled={props.page >= props.info.totalPages}
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
