import {Alert} from 'react-native';
import React from 'react';

import {WinnerComponentProps} from './types';

/**
 * Creates an alert to display the winner or draw of the game and options to play again or cancel.
 *
 *@param {Props} props - the props for the component
 * @return {void}
 */
const WinnerComponent = (props: WinnerComponentProps) => {
  const {player, resetGame, label} = props;
  const alertMsg = label === 'winner' ? `${player} is the winner` : 'Draw';

  /**
   * Creates an alert to display the winner or draw of the game and options to play again or cancel.
   *
   * @return {void}
   */
  const winnerAlert = () =>
    Alert.alert(alertMsg, 'Game Over', [
      {
        text: 'Play Again',
        onPress: resetGame,
        style: 'destructive',
      },
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK'},
    ]);
  return <>{winnerAlert()}</>;
};

export default WinnerComponent;
