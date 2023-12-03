import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import UncontrolledForm from './components/UncontrolledForm/UncontrolledForm';
import ReactHookForm from './components/ReactHookForm/ReactHookForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'}>
      <Route path={'/'} element={<App />} />
      <Route path={'form1'} element={<UncontrolledForm />} />
      <Route path={'form2'} element={<ReactHookForm />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
