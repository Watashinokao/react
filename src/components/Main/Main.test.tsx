import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import RootLayout from '../RootLayout/RootLayout';
import Details from '../Details/Details';
import { userEvent } from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';
import { charactersAPI } from '../../services/CharactersService';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { response } from '../../../tests/resultsMock';
import { expect } from 'vitest';

describe('tests', () => {
  test('the component renders the specified number of cards, the card component renders the relevant card data', async () => {
    const spyOn = vi.spyOn(charactersAPI, 'useFetchAllCharactersQuery');
    spyOn.mockReturnValue({ data: response, refetch: vi.fn() });
    await render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={setupStore()}>
          <Routes>
            <Route path="/" element={<RootLayout />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    expect((await screen.findAllByTestId('character')).length).toBe(
      response.data.length
    );
    expect((await screen.findAllByTestId('character'))[0]).toHaveTextContent(
      response.data[0].name
    );
    expect(screen.getAllByTestId('background')[0]).toHaveStyle({
      background: `center no-repeat url(${response.data[0].imageUrl} )`,
      backgroundSize: 'contain',
    });
    expect(screen.queryByTestId('details')).toBe(null);
  });
  test('an appropriate message is displayed if no cards are present', async () => {
    const resNotFound = {
      data: [],
      info: {
        count: 0,
        nextPage: '',
        previousPage: '',
        totalPages: 0,
      },
    };
    const spyOnResNotFound = vi.spyOn(
      charactersAPI,
      'useFetchAllCharactersQuery'
    );
    spyOnResNotFound.mockReturnValue({ data: resNotFound, refetch: vi.fn() });
    render(
      <MemoryRouter>
        <Provider store={setupStore()}>
          <RootLayout />
        </Provider>
      </MemoryRouter>
    );
    expect(await screen.findByText(/request not found/i)).toBeInTheDocument();
  });
  test('clicking on a card opens a detailed card component', async () => {
    const spyOn = vi.spyOn(charactersAPI, 'useFetchAllCharactersQuery');
    spyOn.mockReturnValue({ data: response, refetch: vi.fn() });
    await render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={setupStore()}>
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <RootLayout />
                </ErrorBoundary>
              }
            />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    const item = (await screen.findAllByTestId('character'))[0];
    await userEvent.click(item);
    const details = await screen.findByTestId('details');
    expect(details).toBeInTheDocument();
  });
  test('clicking triggers an additional API call to fetch detailed information', () => {
    const resCard = {
      data: {
        _id: 1,
        films: ['film1'],
        tvShow: ['tvShow1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
    };
    const spyOnDetails = vi.spyOn(charactersAPI, 'useFetchCharacterByIdQuery');
    spyOnDetails.mockReturnValue({ data: resCard, refetch: vi.fn() });
    render(
      <MemoryRouter initialEntries={['/details/:id']}>
        <Provider store={setupStore()}>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    expect(spyOnDetails).toBeCalledTimes(1);
  });
});
