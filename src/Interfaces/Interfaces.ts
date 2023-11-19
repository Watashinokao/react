import { ReactNode } from 'react';

export interface Character {
  imageUrl: string;
  name: string;
  _id: number;
  films: string[];
  tvShow: string[];
}
export interface ResultsAPI {
  data: Character[];
  info: {
    count: number;
    nextPage: string;
    previousPage: string;
    totalPages: number;
  };
}
export interface CharacterAPI {
  data: Character;
  info: {
    count: number;
    nextPage: string;
    previousPage: string;
    totalPages: number;
  };
}
export interface dataState {
  request: string;
  page: string;
  pageSize: string;
  isDetails: boolean;
  isLoadingDetails: boolean;
  isLoadingCards: boolean;
}
export interface ErrorBoundaryState {
  hasError: boolean;
  textError: string;
}
export interface ErrorBoundaryProps {
  children: ReactNode;
}
export interface MainProps {
  results: Character[] | Character;
}
