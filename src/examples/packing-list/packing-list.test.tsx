// @vitest-environment jsdom

import { render, screen } from 'test/utilities';
import PackingList from '.';

it('renders the Packing List application', () => {
  render(<PackingList />);

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Packing List',
  );
});

it('has the correct title', async () => {
  render(<PackingList />);
  screen.getByText('Packing List');
});

it('has an input field for a new item', () => {
  render(<PackingList />);

  expect(screen.getByRole('searchbox')).toHaveAttribute('id', 'new-item-name');
});

it('has a "Add New Item" button that is disabled when the input is empty', () => {
  render(<PackingList />);

  const newItemInputField = screen.getByRole('searchbox');
  const addNewItemBtn = screen.getByRole('button', { name: 'Add New Item' });

  expect(newItemInputField).toHaveValue('');
  expect(addNewItemBtn).toBeDisabled();
});

it('enables the "Add New Item" button when there is text in the input field', async () => {
  const { user } = render(<PackingList />);

  const newItemInputField = screen.getByRole('searchbox');
  const addNewItemBtn = screen.getByRole('button', { name: 'Add New Item' });

  await user.type(newItemInputField, 'Iphone');

  expect(newItemInputField).toHaveValue('Iphone');
  expect(addNewItemBtn).toBeEnabled();
});

it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />);

  const newItemInputField = screen.getByRole('searchbox');
  const addNewItemBtn = screen.getByRole('button', { name: 'Add New Item' });
  const unpackedItemList = screen.getByTestId('unpacked-items-list');

  await user.type(newItemInputField, 'Iphone');
  expect(newItemInputField).toHaveValue('Iphone');
  expect(addNewItemBtn).toBeEnabled();
  await user.click(addNewItemBtn);
  expect(unpackedItemList.childNodes).toHaveLength(1);
});
