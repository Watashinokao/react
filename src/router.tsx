import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import RootLayout from './components/RootLayout/RootLayout';
import Details from './components/Details/Details';
import Error from './components/Error/Error';
import React from 'react';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
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
    </Route>
  )
);
