import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Details from './Details';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { characterMock, response } from '../../../tests/resultsMock';
import { afterEach } from 'vitest';

describe('details test', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  it('clicking the close button hides the component', async () => {
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(response),
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
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </App>
    );

    const item = (await screen.findAllByTestId('character'))[0];
    const mockFetchBook = Promise.resolve({
      json: () => Promise.resolve(characterMock),
    });

    global.fetch = vi.fn().mockImplementationOnce(() => mockFetchBook);
    await userEvent.click(item);
    const details = await screen.findByTestId('details');
    expect(details).toBeInTheDocument();
    const close = await screen.findByTestId('closeBtn');

    expect(close).toBeInTheDocument();
    await userEvent.click(close);
    expect(close).not.toBeInTheDocument();
  });
  it('loading indicator is displayed while fetching data', async () => {
    const mockFetchBook = Promise.resolve({
      json: () => Promise.resolve(characterMock),
    });
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(response),
    });
    global.fetch = vi.fn().mockImplementationOnce(() => mockFetch);
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
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </App>
    );

    const item = (await screen.findAllByTestId('character'))[0];
    global.fetch = vi.fn().mockImplementationOnce(() => mockFetchBook);
    fireEvent.click(item);
    const details = screen.getByTestId('details');
    expect(details).toHaveTextContent(/loading/i);
  });
});
