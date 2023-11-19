import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import RootLayout from '../../RootLayout/RootLayout';
import { setupStore } from '../../../store/store';
import { charactersAPI } from '../../../services/CharactersService';
import { expect } from 'vitest';

describe('search', () => {
  test('clicking the Search button saves the entered value to the local storage', async () => {
    const res = {
      data: {
        _id: 1,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
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
    const input = screen.getByPlaceholderText(/request/i);
    const searchBtn = screen.getByRole('button', { name: /search/i });
    await userEvent.type(input, 'requestTest');
    await userEvent.click(searchBtn);
    expect(localStorage.getItem('prevRequest')).toBe('requestTest');
  });
});
