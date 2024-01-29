import {fireEvent, render, screen, waitFor} from '../../test/test-utils';
import Board from './Board';

test('renders correctly with values in board', async () => {
  render(
    <Board
      matrix={[
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]}
      board={[
        ['X', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]}
      onPlay={() => {}}
    />,
  );
  const tile = screen.getByTestId('tile-00');
  await waitFor(() => {
    expect(tile.props.children[0].props.children).toBe('X');
  });
});

test('should render update board onPress on tile', () => {
  const mockFn = jest.fn();
  render(
    <Board
      matrix={[
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]}
      board={[
        ['X', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]}
      onPlay={mockFn}
    />,
  );
  const tile = screen.getByTestId('tile-11');
  fireEvent.press(tile);
  expect(mockFn).toHaveBeenCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith(1, 1);
});
