import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Details from './Details';
import React from 'react';
import { charactersAPI } from '../../services/CharactersService';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';

describe('details data', () => {
  it('the detailed card component correctly displays the detailed card data', async () => {
    const resCard = {
      data: {
        _id: 1,
        films: ['film1'],
        tvShow: ['tvShow1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
    };
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
    expect(details).toHaveTextContent(`Name: ${resCard.data.name}`);
    expect(details).toHaveTextContent(`Film: ${resCard.data.films}`);
    expect(details).toHaveTextContent(`tvShow: ${resCard.data.tvShow}`);
    const background = await screen.findByTestId('detailsBackground');
    expect(background).toBeInTheDocument();
    expect(background).toHaveStyle({
      background: `center no-repeat url(${resCard.data.imageUrl} )`,
    });
  });
});
