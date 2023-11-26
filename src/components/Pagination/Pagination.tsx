import React, { FC } from 'react';
import { useRouter } from 'next/router';

interface PaginationProps {
  totalPages: number;
}
const Pagination: FC<PaginationProps> = (props) => {
  const router = useRouter();
  const page = router.query.page;
  const pageSize = router.query.pageSize;
  const name = router.query.name;
  return (
    <div className={'pagination'}>
      <button
        onClick={() =>
          router.push({
            query: {
              ...router.query,
              page: Number(page) - 1,
              name: name ? String(name) : '',
            },
          })
        }
        disabled={Number(page) <= 1}
      >
        Prev
      </button>
      <div data-testid={'current-page'}>{page || 1}</div>
      <button
        onClick={() =>
          router.push({
            query: {
              ...router.query,
              page: page ? Number(page) + 1 : '2',
              name: name ? String(name) : '',
            },
          })
        }
        disabled={Number(page) >= props.totalPages}
      >
        Next
      </button>
      <p>Elements quantity:</p>
      <select
        value={pageSize ? String(pageSize) : '10'}
        className="select"
        onChange={(e) =>
          router.push({
            query: {
              ...router.query,
              page: '1',
              pageSize: e.target.value,
              name: name ? String(name) : '',
            },
          })
        }
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
