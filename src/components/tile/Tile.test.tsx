import {fireEvent, render, screen} from '../../test/test-utils';

import Tile from './Tile';

const mockFn = jest.fn();

test('Tile component renders correctly with specified value in the tile', () => {
  render(<Tile boardValue="X" play={() => {}} />);
  const tile = screen.getByText('X');
  expect(tile.props.children[0]).toBe('X');
});

test('Tile component should trigger play function on press', () => {
  render(<Tile boardValue="X" keyValue="1" play={mockFn} />);
  fireEvent.press(screen.getByRole('button'));
  expect(mockFn).toHaveBeenCalledTimes(1);
});
