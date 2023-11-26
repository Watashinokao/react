import Header from '../src/components/Header/Header';
import { wrapper } from '../src/store/store';
import {
  charactersAPI,
  getRunningQueriesThunk,
} from '../src/services/CharactersService';
import { useRouter } from 'next/router';
import Pagination from '../src/components/Pagination/Pagination';
import Main from '../src/components/Main/Main';
import { ResultsAPI } from '../src/Interfaces/Interfaces';
import { ReactNode } from 'react';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const page = context.query.page;
    const pageSize = context.query.pageSize;
    const name = context.query.name;
    console.log(pageSize);
    const { data: ResultsAPI, isError } = await store.dispatch(
      charactersAPI.endpoints.fetchAllCharacters.initiate({
        name: name ? String(name) : '',
        page: page ? String(page) : '1',
        pageSize: pageSize ? String(pageSize) : '10',
      })
    );
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: { data: ResultsAPI, isError },
    };
  }
);
export default function Home({
  data,
  isError,
  children,
}: {
  data: ResultsAPI;
  isError: boolean;
  children: ReactNode;
}) {
  const router = useRouter();

  if (isError) {
    throw new Error('Error server');
  }
  return (
    <>
      <Header />
      <div className={'app'}>
        {data && data.info.count ? (
          <>
            <Pagination totalPages={data.info.totalPages} />
            <div
              className={
                router.pathname === '/details/[id]' ? 'open-details' : ''
              }
              data-testid="main"
            >
              <Main results={data.data} />
              {children}
            </div>
          </>
        ) : (
          <p>Request not found</p>
        )}
      </div>
    </>
  );
}
