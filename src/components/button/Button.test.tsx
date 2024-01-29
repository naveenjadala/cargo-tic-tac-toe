import {fireEvent, render, screen} from '../../test/test-utils';

import Button from './Button';

const mockFn = jest.fn();

test('renders correctly', () => {
  render(<Button label="resetButton" resetGame={mockFn} />);
  const tile = screen.getByText('resetButton');
  expect(tile.props.children).toBe('resetButton');
});

test('renders correctly with key', () => {
  render(<Button label="resetButton" resetGame={mockFn} />);
  fireEvent.press(screen.getByRole('button'));
  expect(mockFn).toHaveBeenCalledTimes(1);
});
