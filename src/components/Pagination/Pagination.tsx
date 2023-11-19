import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { dataSlice } from '../../store/redusers/dataSlice';

interface PaginationProps {
  totalPages: number;
}
const Pagination: FC<PaginationProps> = (props) => {
  const { page, pageSize } = useAppSelector((state) => state.dataReducer);
  const dispatch = useAppDispatch();
  const { setPageSize, setPage } = dataSlice.actions;
  return (
    <div className={'pagination'}>
      <button
        onClick={() => dispatch(setPage('prev'))}
        disabled={Number(page) <= 1}
      >
        Prev
      </button>
      <div data-testid={'current-page'}>{page}</div>
      <button
        onClick={() => dispatch(setPage('next'))}
        disabled={Number(page) >= props.totalPages}
      >
        Next
      </button>
      <p>Elements quantity:</p>
      <select
        value={pageSize}
        className="select"
        onChange={(e) => dispatch(setPageSize(e.target.value))}
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
