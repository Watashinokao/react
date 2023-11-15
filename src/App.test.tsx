import { render, screen } from '@testing-library/react';
import Header from './components/Header/Header';
import { expect } from 'vitest';

describe('test App', () => {
  test('test Header', async () => {
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
});
