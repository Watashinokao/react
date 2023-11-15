import { render, screen } from '@testing-library/react';
import App from '../../App';
import { userEvent } from '@testing-library/user-event';
import React from 'react';

describe('page', () => {
  test(' component updates URL query parameter when page changes', async () => {
    const resData = [
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
      {
        _id: 6,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 7,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 8,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 9,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 10,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 11,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 12,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
      {
        _id: 13,
        films: ['film1'],
        tvShows: ['tvShows1'],
        name: 'Character1',
        imageUrl:
          'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
      },
    ];
    const res = {
      data: resData,
      info: {
        count: 5,
        nextPage: '',
        previousPage: '',
        totalPages: 5,
      },
    };
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(res),
    });
    global.fetch = vi.fn().mockImplementation(() => mockFetch);
    render(<App />);

    expect(window.location.search).toEqual('?page=1');

    const nextBtn = await screen.findByRole('button', { name: /next/i });
    await userEvent.click(nextBtn);
    expect(window.location.search).toEqual('?page=2');
    const prevBtn = await screen.findByRole('button', { name: /prev/i });
    await userEvent.click(prevBtn);
    expect(window.location.search).toEqual('?page=1');
  });
});
