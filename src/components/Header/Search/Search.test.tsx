import { render, screen } from '@testing-library/react';
import App from '../../../App';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Main from '../../Main/Main';
import React from 'react';

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

    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(res),
    });
    global.fetch = vi.fn().mockImplementation(() => mockFetch);
    render(
      <App>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route
              path="/"
              element={
                <Main isDetails={false} page={1} setIsDetails={vi.fn()} />
              }
            />
          </Routes>
        </MemoryRouter>
      </App>
    );
    const input = screen.getByPlaceholderText(/request/i);
    const searchBtn = screen.getByRole('button', { name: /search/i });
    await userEvent.type(input, 'requestTest');
    await userEvent.click(searchBtn);
    expect(localStorage.getItem('prevRequest')).toBe('requestTest');
  });
  test('component retrieves the value from the local storage upon mounting', () => {
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

    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(res),
    });
    global.fetch = vi.fn().mockImplementation(() => mockFetch);
    const spyOn = vi.spyOn(Storage.prototype, 'getItem');
    render(<App />);

    expect(spyOn).toBeCalledTimes(1);
  });
});
