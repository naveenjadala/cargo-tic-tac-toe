import {fireEvent, render, screen} from '../../test/test-utils';

import Tile from './Tile';

const mockFn = jest.fn();

test('renders correctly', () => {
  render(<Tile boardValue="X" play={() => {}} />);
  const tile = screen.getByText('X');
  expect(tile.props.children[0]).toBe('X');
});

test('renders correctly with key', () => {
  render(<Tile boardValue="X" keyValue="1" play={mockFn} />);
  fireEvent.press(screen.getByRole('button'));
  expect(mockFn).toHaveBeenCalledTimes(1);
});
