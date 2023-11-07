import { ReactNode } from 'react';

export interface Character {
  imageUrl: string;
  name: string;
  _id: number;
  films: string[];
  tvShow: string[];
}
export interface MainProps {
  data: Character[];
  info: {
    count: number;
    nextPage: string;
    previousPage: string;
    totalPages: number;
  };
}
export interface ContextType {
  handleDetails: () => void;
  page: number;
}
export interface SearchProps {
  handleRequest: (request: string) => void;
}
export interface PaginationProps {
  pageSize: number;
  page: number;
  handlePage: (page: string) => void;
  handlePageSize: (size: number) => void;
  info: {
    count: number;
    nextPage: string;
    previousPage: string;
    totalPages: number;
  };
}
export interface ErrorBoundaryState {
  hasError: boolean;
  textError: string;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}
