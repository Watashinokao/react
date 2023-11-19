import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React, { useState } from 'react';
import { charactersAPI } from '../../services/CharactersService';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';
import RootLayout from '../RootLayout/RootLayout';
import { expect } from 'vitest';

let mockParams = { page: '1' };
vi.mock('react-router-dom', async () => ({
  ...((await vi.importActual('react-router-dom')) as object),
  useSearchParams: () => {
    const [params, setParams] = useState(
      new URLSearchParams('page=' + Number(mockParams.page))
    );
    return [
      params,
      (newParams: { page: string }) => {
        mockParams = newParams;
        setParams(new URLSearchParams('page=' + Number(newParams.page)));
      },
    ];
  },
}));
describe('page', () => {
  test(' component updates URL query parameter when page changes', async () => {
    const resData = [
      {
        _id: 1,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 2,
        films: ['film2'],
        tvShows: ['tvShows2'],
        name: 'Character2',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 3,
        films: ['film3'],
        tvShows: ['tvShows3'],
        name: 'Character3',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 4,
        films: ['film4'],
        tvShows: ['tvShows4'],
        name: 'Character4',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 5,
        films: ['film5'],
        tvShows: ['tvShows5'],
        name: 'Character5',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 6,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 7,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 8,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 9,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 10,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 11,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 12,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 13,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
    ];
    const res = {
      data: resData,
      info: {
        count: 5,
        nextPage: '',
        previousPage: '',
        totalPages: 5,
      },
    };
    const spyOn = vi.spyOn(charactersAPI, 'useFetchAllCharactersQuery');
    spyOn.mockReturnValue({ data: res, refetch: vi.fn() });
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={setupStore()}>
          <Routes>
            <Route path="/" element={<RootLayout />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    const nextBtn = await screen.findByRole('button', { name: /next/i });
    const prevBtn = await screen.findByRole('button', { name: /prev/i });
    expect(nextBtn).toBeInTheDocument();
    expect(prevBtn).toBeInTheDocument();
    await userEvent.click(nextBtn);
    expect(mockParams).toEqual({ page: '2' });
    await userEvent.click(prevBtn);
    expect(mockParams).toEqual({ page: '1' });
  });
});
