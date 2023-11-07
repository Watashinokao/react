import React, { FC } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Details from './components/Details/Details';
import RootLayout from './components/RootLayout/RootLayout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const router = createBrowserRouter(
  createRoutesFromElements(
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
  )
);
const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
