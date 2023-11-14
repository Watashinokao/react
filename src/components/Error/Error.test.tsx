import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import RootLayout from '../RootLayout/RootLayout';
import Details from '../Details/Details';
import Error from './Error';
import React from 'react';

describe('404', () => {
  test(' 404 page is displayed when navigating to an invalid route', async () => {
    render(
      <MemoryRouter initialEntries={['/rgvwra']}>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <RootLayout />
              </ErrorBoundary>
            }
          >
            <Route path="/details/:id" element={<Details />}></Route>
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </MemoryRouter>
    );
    expect(await screen.findByText(/not correct url/i)).toBeInTheDocument();
  });
});
