import { render, screen } from '@testing-library/react';
import Main from './Main';
import { MemoryRouter } from 'react-router-dom';
import { ResultsContext } from '../../Interfaces/Interfaces';

vi.mock('react', async () => ({
  ...(await vi.importActual('react')),
  useState: vi.fn(),
}));
import { useState } from 'react';

describe('test Main', () => {
  beforeEach(async () => {
    useState.mockImplementation((await vi.importActual('react')).useState);
  });
  test('count items', async () => {
    const res = [
      {
        _id: 1,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 2,
        films: ['film2'],
        tvShows: ['tvShows2'],
        name: 'Character2',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 3,
        films: ['film3'],
        tvShows: ['tvShows3'],
        name: 'Character3',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 4,
        films: ['film4'],
        tvShows: ['tvShows4'],
        name: 'Character4',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 5,
        films: ['film5'],
        tvShows: ['tvShows5'],
        name: 'Character5',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
    ];
    const mockSetResults = vi.fn();
    const response = {
      results: {
        data: res,
        info: {
          count: 5,
          nextPage: '',
          previousPage: '',
          totalPages: 5,
        },
      },
      setResults: mockSetResults,
    };

    await render(
      <MemoryRouter>
        <ResultsContext.Provider value={response}>
          <Main isDetails={false} />
        </ResultsContext.Provider>
      </MemoryRouter>
    );
    expect((await screen.findAllByTestId('character')).length).toBe(res.length);
    expect((await screen.findAllByTestId('character'))[0]).toHaveTextContent(
      res[0].name
    );
    expect(screen.queryByTestId('details')).toBe(null);

    // const state = useState.mockImplementation(() => ['false', setIsDetails]);
    // await render(
    //   <MemoryRouter>
    //     <Main isDetails={isDetails} setIsDetails={setIsDetails} />
    //   </MemoryRouter>
    // );
    // const clickItem = (await screen.findAllByTestId('character'))[0];
    // fireEvent.click(clickItem);
    // expect(screen.queryByTestId('details')).toBeInTheDocument();
  });
});
