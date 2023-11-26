import {
  charactersAPI,
  getRunningQueriesThunk,
} from '../../src/services/CharactersService';
import { wrapper } from '../../src/store/store';
import Home from '../index';
import Details from '../../src/components/Details/Details';
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const id = context.params.id;
    const page = context.query.page;
    const pageSize = context.query.pageSize;
    const name = context.query.name;
    const { data: ResultsAPI, isError } = await store.dispatch(
      charactersAPI.endpoints.fetchAllCharacters.initiate({
        name: name ? String(name) : '',
        page: page ? String(page) : '1',
        pageSize: pageSize ? String(pageSize) : '10',
      })
    );
    let dataCharacter;
    if (typeof id === 'string') {
      dataCharacter = await store.dispatch(
        charactersAPI.endpoints.fetchCharacterById.initiate(id)
      );
    }
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: { data: ResultsAPI, isError, dataCharacter },
    };
  }
);

export default function PageDetails(props) {
  const { data, isError, dataCharacter } = props;
  return (
    <Home data={data} isError={isError}>
      <Details data={dataCharacter.data} />
    </Home>
  );
}
