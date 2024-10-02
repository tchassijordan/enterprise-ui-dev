// @vitest-environment happy-dom

import { screen } from '@testing-library/react';
import { render } from 'test/utilities';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
});

test('it should increment when the "Increment" button is pressed', async () => {
  const { user } = render(<Counter />);
  const textContainerId = 'current-count';
  const textContainer = screen.getByTestId(textContainerId);
  expect(textContainer).toHaveTextContent('0');

  const incrementBtn = screen.getByRole('button', { name: 'Increment' });
  await user.click(incrementBtn);
  expect(textContainer).toHaveTextContent('1');
});
