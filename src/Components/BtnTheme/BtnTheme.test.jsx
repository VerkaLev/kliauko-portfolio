import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BtnTheme from './BtnTheme';
import { expect, test } from 'vitest';

test('переключает тему при нажатии', async () => {
  render(<BtnTheme />);
  const button = screen.getByRole('button');
  const initialTheme = document.documentElement.getAttribute('data-theme');

  await userEvent.click(button);

  await waitFor(() => {
    const newTheme = document.documentElement.getAttribute('data-theme');
    expect(newTheme).not.toBe(initialTheme);
    expect(['light', 'dark']).toContain(newTheme);
  });
});
