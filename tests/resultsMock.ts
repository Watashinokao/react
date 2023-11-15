import { MockCharacter, Results } from '../src/Interfaces/Interfaces';

export const characterMock: MockCharacter = {
  data: {
    _id: 1,
    films: ['film1'],
    tvShow: ['tvShow1'],
    name: 'Character1',
    imageUrl:
      'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
  },
};
export const response: Results = {
  data: [
    {
      _id: 1,
      films: ['film1'],
      tvShow: ['tvShows1'],
      name: 'Character1',
      imageUrl:
        'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
    },
    {
      _id: 2,
      films: ['film2'],
      tvShow: ['tvShows2'],
      name: 'Character2',
      imageUrl:
        'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802',
    },
  ],
  info: {
    count: 2,
    nextPage: '',
    previousPage: '',
    totalPages: 1,
  },
};
