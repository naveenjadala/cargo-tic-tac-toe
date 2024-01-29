import {fireEvent, render, screen, waitFor} from '../../test/test-utils';

import Home from './Home';

describe('Home', () => {
  test('Should render snapshot', () => {
    render(<Home />);
    expect(screen).toMatchSnapshot();
  });

  test('Should render first player is x', () => {
    render(<Home />);
    const text = screen.getByText("Players: X's turn to play");
    expect(text).toBeTruthy();
  });

  test('Should render second player is o', async () => {
    render(<Home />);
    fireEvent.press(screen.getByTestId('tile-00'));
    const text = screen.getByText("Players: O's turn to play");
    await waitFor(() => {
      expect(text).toBeTruthy();
    });
  });

  test('Should render correct player on press', async () => {
    render(<Home />);

    const textPlayerX = screen.getByText("Players: X's turn to play");
    expect(textPlayerX).toBeTruthy();

    fireEvent.press(screen.getByTestId('tile-00'));

    await waitFor(() => {
      expect(screen.getAllByTestId('tile')[0].props.children).toBe('X');
    });

    const textPlayerO = screen.getByText("Players: O's turn to play");
    expect(textPlayerO).toBeTruthy();

    fireEvent.press(screen.getByTestId('tile-01'));

    await waitFor(() => {
      expect(screen.getAllByTestId('tile')[1].props.children).toBe('O');
    });

    expect(textPlayerX).toBeTruthy();
  });

  test('should restart game', () => {
    render(<Home />);
    fireEvent.press(screen.getByTestId('tile-00'));
    const textPlayerO = screen.getByText("Players: O's turn to play");

    expect(textPlayerO).toBeTruthy();

    expect(screen.getAllByTestId('tile')[0].props.children).toBe('X');

    fireEvent.press(screen.getByTestId('resetGame'));

    const textPlayerX = screen.getByText("Players: X's turn to play");
    expect(textPlayerX).toBeTruthy();

    expect(screen.getAllByTestId('tile')[0].props.children).toBe('');
  });

  test('Should render x as winner', () => {
    render(<Home />);
    fireEvent.press(screen.getByTestId('tile-00')); // x
    fireEvent.press(screen.getByTestId('tile-01')); // o
    fireEvent.press(screen.getByTestId('tile-11')); // x
    fireEvent.press(screen.getByTestId('tile-10')); // o
    fireEvent.press(screen.getByTestId('tile-22')); // x
    const textPlayerX = screen.getByText("Players: X's turn to play");
    expect(textPlayerX).toBeTruthy();
    const text = screen.getByTestId('winner');
    waitFor(() => {
      expect(text).toBeTruthy();
    });
  });

  test('Should render o as winner', () => {
    render(<Home />);
    fireEvent.press(screen.getByTestId('tile-11')); // x
    fireEvent.press(screen.getByTestId('tile-00')); // o
    fireEvent.press(screen.getByTestId('tile-22')); // x
    fireEvent.press(screen.getByTestId('tile-01')); // o
    fireEvent.press(screen.getByTestId('tile-20')); // x
    fireEvent.press(screen.getByTestId('tile-02')); // o
    const textPlayerO = screen.getByText("Players: O's turn to play");
    expect(textPlayerO).toBeTruthy();
    const text = screen.getByTestId('winner');
    waitFor(() => {
      expect(text).toBeTruthy();
    });
  });

  test('Should render a draw game', () => {
    render(<Home />);
    fireEvent.press(screen.getByTestId('tile-11')); // x
    fireEvent.press(screen.getByTestId('tile-00')); // o
    fireEvent.press(screen.getByTestId('tile-22')); // x
    fireEvent.press(screen.getByTestId('tile-01')); // o
    fireEvent.press(screen.getByTestId('tile-02')); // x
    fireEvent.press(screen.getByTestId('tile-12')); // o
    fireEvent.press(screen.getByTestId('tile-10')); // x
    fireEvent.press(screen.getByTestId('tile-20')); // o
    fireEvent.press(screen.getByTestId('tile-21')); // x
    const text = screen.getByTestId('draw');
    waitFor(() => {
      expect(text).toBeTruthy();
    });
  });
});
