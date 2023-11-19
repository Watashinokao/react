import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Header from './Header';
import { userEvent } from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';

describe('error boundary', () => {
  it.fails('error', async () => {
    render(
      <Provider store={setupStore()}>
        <Header />
      </Provider>
    );
    expect(screen.getByTestId('error-request')).not.toBeInTheDocument();
    const errorBtn = screen.getByRole('button', { name: /error/i });
    expect(await userEvent.click(errorBtn)).toThrowError();
    expect(screen.getByTestId('error-text')).toBeInTheDocument();
    const tryAgain = screen.getByRole('button', { name: /Try again/i });
    await userEvent.click(tryAgain);
    expect(screen.getByTestId('error-request')).not.toBeInTheDocument();
  });
});
