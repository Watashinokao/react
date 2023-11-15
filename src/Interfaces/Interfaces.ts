import { ReactNode, Dispatch, SetStateAction, createContext } from 'react';

export interface MockCharacter {
  data: Character;
}
export interface Character {
  imageUrl: string;
  name: string;
  _id: number;
  films: string[];
  tvShow: string[];
}

export interface ContextOutlet {
  handleDetails: () => void;
  page: number;
}

export interface PaginationProps {
  pageSize: number;
  page: number;
  handlePage: (page: string) => void;
  handlePageSize: (size: number) => void;
}
export interface ErrorBoundaryState {
  hasError: boolean;
  textError: string;
}
export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ContextRequest {
  request: string | null;
  setRequest: Dispatch<SetStateAction<string | null>>;
}
export interface Results {
  data: Character[];
  info: {
    count: number;
    nextPage: string;
    previousPage: string;
    totalPages: number;
  };
}
export interface ContextResults {
  results: {
    data: Character[];
    info: {
      count: number;
      nextPage: string;
      previousPage: string;
      totalPages: number;
    };
  };
  setResults: Dispatch<
    SetStateAction<{
      data: Character[];
      info: {
        count: number;
        nextPage: string;
        previousPage: string;
        totalPages: number;
      };
    }>
  >;
}

export const RequestContext = createContext({} as ContextRequest);
export const ResultsContext = createContext<ContextResults>({
  results: {
    data: [],
    info: {
      count: 0,
      nextPage: '',
      previousPage: '',
      totalPages: 0,
    },
  },
  setResults: (prevState: SetStateAction<Results>) => prevState,
});
