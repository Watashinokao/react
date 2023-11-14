import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Details from './Details';
import { userEvent } from '@testing-library/user-event';
import React from 'react';

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
describe('details test', () => {
  test('the detailed card component correctly displays the detailed card data', async () => {
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(response),
    });
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
    expect(details).toHaveTextContent(`Name: ${characterMock.data.name}`);
    expect(details).toHaveTextContent(`Film: ${characterMock.data.films}`);
    expect(details).toHaveTextContent(`tvShow: ${characterMock.data.tvShow}`);
    const background = await screen.findByTestId('detailsBackground');
    expect(background).toBeInTheDocument();
    expect(background).toHaveStyle({
      background: `center no-repeat url(${characterMock.data.imageUrl} )`,
    });
  });
  test('loading indicator is displayed while fetching data', async () => {
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(response),
    });
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
    fireEvent.click(item);
    const details = screen.getByTestId('details');
    expect(details).toHaveTextContent(/loading/i);
  });
  test(' clicking the close button hides the component', async () => {
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(response),
    });
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
    const close = screen.getByTestId('closeBtn');
    expect(close).toBeInTheDocument();
    await userEvent.click(close);
    expect(details).not.toBeInTheDocument();
  });
});
