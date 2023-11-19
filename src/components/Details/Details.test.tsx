import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Details from './Details';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { charactersAPI } from '../../services/CharactersService';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';
import { expect } from 'vitest';
import { resCard } from '../../../tests/resultsMock';

describe('details test', () => {
  it('loading indicator is displayed while fetching data', async () => {
    await render(
      <MemoryRouter initialEntries={['/details/:id']}>
        <Provider store={setupStore()}>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    const details = await screen.findByTestId('details');
    expect(details).toHaveTextContent('Loading...');
  });
  it('clicking the close button hides the component', async () => {
    const spyOnDetails = vi.spyOn(charactersAPI, 'useFetchCharacterByIdQuery');
    spyOnDetails.mockReturnValue({ data: resCard, refetch: vi.fn() });
    render(
      <MemoryRouter initialEntries={['/details/:id']}>
        <Provider store={setupStore()}>
          <Routes>
            <Route path="/details/:id" element={<Details />}></Route>
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    const details = await screen.findByTestId('details');
    expect(details).toBeInTheDocument();
    const close = await screen.findByTestId('closeBtn');
    expect(close).toBeInTheDocument();
    await userEvent.click(close);
    expect(close).not.toBeInTheDocument();
    expect(details).not.toBeInTheDocument();
  });
});
