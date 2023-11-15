import { render, screen } from '@testing-library/react';
import Main from './Main';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import RootLayout from '../RootLayout/RootLayout';
import Details from '../Details/Details';
import { userEvent } from '@testing-library/user-event';
import App from '../../App';

const response = {
  data: [
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
  ],
  info: {
    count: 2,
    nextPage: '',
    previousPage: '',
    totalPages: 1,
  },
};
const mockFetch = Promise.resolve({
  json: () => Promise.resolve(response),
});
describe('tests', () => {
  test('the component renders the specified number of cards, the card component renders the relevant card data', async () => {
    global.fetch = vi.fn().mockImplementationOnce(() => mockFetch);
    await render(
      <App>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route
              path="/"
              element={
                <Main isDetails={false} page={1} setIsDetails={vi.fn()} />
              }
            />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </App>
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
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(resNotFound),
    });
    global.fetch = vi.fn().mockImplementationOnce(() => mockFetch);
    render(
      <MemoryRouter>
        <RootLayout />
      </MemoryRouter>
    );
    expect(await screen.findByText(/request not found/i)).toBeInTheDocument();
  });
  test('clicking on a card opens a detailed card component', async () => {
    global.fetch = vi.fn().mockImplementationOnce(() => mockFetch);
    await render(
      <App>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route
              path="/"
              element={
                <Main page={1} setIsDetails={vi.fn()} isDetails={false} />
              }
            />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </App>
    );

    const item = (await screen.findAllByTestId('character'))[0];
    const characterMock = {
      data: {
        _id: 1,
        films: ['film1'],
        tvShow: ['tvShow1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
    };
    const mockFetchBook = Promise.resolve({
      json: () => Promise.resolve(characterMock),
    });
    global.fetch = vi.fn().mockImplementationOnce(() => mockFetchBook);
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
    const mockFetchBook = Promise.resolve({
      json: () => Promise.resolve(resCard),
    });
    global.fetch = vi.fn().mockImplementation(() => mockFetchBook);
    const spyOn = vi.spyOn(global, 'fetch');
    render(
      <App>
        <MemoryRouter initialEntries={['/details/:id']}>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </App>
    );
    expect(spyOn).toBeCalled();
  });
});
