import React, { FC, ReactNode, useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Details from './components/Details/Details';
import RootLayout from './components/RootLayout/RootLayout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Error from './components/Error/Error';
import {
  RequestContext,
  Results,
  ResultsContext,
} from './Interfaces/Interfaces';
const router = createBrowserRouter(
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

interface appProps {
  children?: ReactNode;
}
const App: FC<appProps> = ({ children }) => {
  const [request, setRequest] = useState(localStorage.getItem('prevRequest'));
  const [results, setResults] = useState<Results>({
    data: [],
    info: {
      count: 0,
      nextPage: '',
      previousPage: '',
      totalPages: 0,
    },
  });
  return (
    <>
      <ResultsContext.Provider value={{ results, setResults }}>
        <RequestContext.Provider value={{ request, setRequest }}>
          <RouterProvider router={router} />
        </RequestContext.Provider>
      </ResultsContext.Provider>
      {children}
    </>
  );
};

export default App;
