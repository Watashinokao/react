import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import RootLayout from '../../RootLayout/RootLayout';
import { setupStore } from '../../../store/store';
import { charactersAPI } from '../../../services/CharactersService';
import { expect } from 'vitest';
import { response } from '../../../../tests/resultsMock';

describe('search', () => {
  test('clicking the Search button saves the entered value to the local storage', async () => {
    const spyOn = vi.spyOn(charactersAPI, 'useFetchAllCharactersQuery');
    spyOn.mockReturnValue({ data: response, refetch: vi.fn() });
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={setupStore()}>
          <Routes>
            <Route path="/" element={<RootLayout />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText(/request/i);
    const searchBtn = screen.getByRole('button', { name: /search/i });
    await userEvent.type(input, 'requestTest');
    await userEvent.click(searchBtn);
    expect(localStorage.getItem('prevRequest')).toBe('requestTest');
  });
});
