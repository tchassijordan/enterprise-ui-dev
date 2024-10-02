// @vitest-environment happy-dom

import { render, screen } from 'test/utilities';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});

test('it should increment when the "Increment" button is pressed', async () => {
  const { user } = render(<Counter />);

  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });

  await user.click(incrementButton);

  expect(currentCount).toHaveTextContent('1');
});

test('it should render the component with an initial count', () => {
  render(<Counter initialCount={2} />);
  const countainerElt = screen.getByTestId('current-count');
  expect(countainerElt).toHaveTextContent('2');
});

test('it should reset the count when the "Reset" button is pressed', async () => {
  const { user } = render(<Counter initialCount={2} />);
  const countainerElt = screen.getByTestId('current-count');
  const resetBtn = screen.getByRole('button', { name: 'Reset' });
  expect(countainerElt).toHaveTextContent('2');
  await user.click(resetBtn);
  expect(countainerElt).toHaveTextContent('0');
});
