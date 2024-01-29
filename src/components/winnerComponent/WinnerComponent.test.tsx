import {fireEvent, render, screen} from '../../test/test-utils';
import {Alert} from 'react-native';

jest.spyOn(Alert, 'alert');

import WinnerComponent from './WinnerComponent';

test('renders correctly with winner', () => {
  const mockRestGame = jest.fn();
  render(
    <WinnerComponent player="X" resetGame={mockRestGame} label="winner" />,
  );
  expect(Alert.alert).toHaveBeenCalled();
  expect(Alert.alert).toHaveBeenCalledWith('X is the winner', 'Game Over', [
    {text: 'Play Again', onPress: mockRestGame, style: 'destructive'},
    {text: 'Cancel', style: 'cancel'},
    {text: 'OK'},
  ]);
});

test('renders correctly with draw', () => {
  const mockRestGame = jest.fn();
  render(<WinnerComponent player="X" resetGame={mockRestGame} label="draw" />);
  expect(Alert.alert).toHaveBeenCalled();
  expect(Alert.alert).toHaveBeenCalledWith('Draw', 'Game Over', [
    {text: 'Play Again', onPress: mockRestGame, style: 'destructive'},
    {text: 'Cancel', style: 'cancel'},
    {text: 'OK'},
  ]);
});
