import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterAPI, ResultsAPI } from '../Interfaces/Interfaces';

export const charactersAPI = createApi({
  reducerPath: 'charactersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.disneyapi.dev' }),
  endpoints: (build) => ({
    fetchAllCharacters: build.query<
      ResultsAPI,
      { name: string; page: string; pageSize: string }
    >({
      query: (arg) => {
        const { name = '', page = '1', pageSize = '10' } = arg;
        return {
          url: '/character',
          params: {
            name,
            page,
            pageSize,
          },
        };
      },
    }),
    fetchCharacterById: build.query<CharacterAPI, string>({
      query: (id: string) => ({
        url: `/character/${id}`,
      }),
    }),
  }),
});
