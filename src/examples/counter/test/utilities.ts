import { render as renderComponent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

type TOptionsProps = Parameters<typeof renderComponent>[1];

export * from '@testing-library/react';

export const render = (ui: React.ReactElement, options?: TOptionsProps) => ({
  ...renderComponent(ui, options),
  user: userEvent.setup(),
});
