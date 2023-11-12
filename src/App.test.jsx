import { render, screen } from '@testing-library/react';
import Header from './components/Header/Header';
import Pagination from './components/Pagination/Pagination';

describe('test App', () => {
  test('test Header', () => {
    render(<Header />);
    const input = screen.getByPlaceholderText(/request/i);
    const searchBtn = screen.getByRole('button', { name: /search/i });
    const errorBtn = screen.getByRole('button', { name: /error/i });
    expect(input).toHaveFocus();
    expect(searchBtn).toBeInTheDocument();
    expect(errorBtn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(screen.getByText(/disney character/i)).toBeInTheDocument();
  });
  test('test Pagination', () => {
    const p = 3;
    render(<Pagination pageSize={30} page={p} />);
    const currentPage = screen.getByTestId('current-page');
    expect(currentPage).toHaveTextContent(`${p}`);
    // expect(window.location.search).toBe(`?page=${1}`);
  });
});
