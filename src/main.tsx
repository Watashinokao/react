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
import { setupStore } from './store/store';
import { Provider } from 'react-redux';
const store = setupStore();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'}>
      <Route path={'/'} element={<App />} />
      <Route path={'UncontrolledForm'} element={<UncontrolledForm />} />
      <Route path={'ReactHookForm'} element={<ReactHookForm />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
