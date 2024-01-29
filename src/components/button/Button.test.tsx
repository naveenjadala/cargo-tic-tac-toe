import {fireEvent, render, screen} from '../../test/test-utils';

import Button from './Button';

const mockFn = jest.fn();

test('render button component correctly with specified label', () => {
  render(<Button label="resetButton" resetGame={mockFn} />);
  const tile = screen.getByText('resetButton');
  expect(tile.props.children).toBe('resetButton');
});

test('Button component triggers resetGame function on press', () => {
  render(<Button label="resetButton" resetGame={mockFn} />);
  fireEvent.press(screen.getByRole('button'));
  expect(mockFn).toHaveBeenCalledTimes(1);
});
