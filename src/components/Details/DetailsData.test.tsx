import { describe } from 'vitest';
import { characterMock, response } from '../../../tests/resultsMock';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Details from './Details';
import { userEvent } from '@testing-library/user-event';
import React from 'react';

describe('details data', () => {
  it('the detailed card component correctly displays the detailed card data', async () => {
    const mockFetchBook = Promise.resolve({
      json: () => Promise.resolve(characterMock),
    });
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
});
