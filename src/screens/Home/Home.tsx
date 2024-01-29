import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {styles} from './styles';
import Board from '../../components/board/Board';
import Button from '../../components/button/Button';
import WinnerComponent from '../../components/winnerComponent/WinnerComponent';
import {Matrix, playerProps} from './types';
import {winningPatterns} from '../../assets/constants';

/**
 * Function that renders the Home component.
 *
 * @return {JSX.Element} The Home component
 */
const Home = () => {
  let matrix: Matrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  const [board, setBoard] = useState<Matrix>(matrix);
  const [player, setPlayer] = useState<playerProps>('X');
  const [win, setWin] = useState<boolean>(false);
  const [draw, setDraw] = useState(false);
  const isInitialRender = React.useRef(true);

  useEffect(() => {
    if (!isInitialRender.current) {
      checkIsWinner();
    } else {
      isInitialRender.current = false;
    }
  }, [board]);

  /**
   * Updates the board with the player's move if the value is empty and the board
   * is updated.
   *
   * @function onPlay
   *
   * @param {number} i - the row index of the value
   * @param {number} j - the column index of the value
   * @return {void}
   */
  const onPlay = (i: number, j: number) => {
    if (board[i][j] === '' && !win) {
      setBoard(prev => {
        const newBoard = [...prev];
        newBoard[i][j] = player;
        return newBoard;
      });
    }
  };

  /**
   * Resets the game by setting the board to the initial state,
   * setting the player to 'X', and setting the win status to false.
   */
  const resetGame = () => {
    isInitialRender.current = true;
    setWin(false);
    setDraw(false);
    setPlayer('X');
    setBoard(matrix);
  };

  /**
   * Check if every element in the row is equal to the first element and not empty.
   *
   * @param {string[]} row - the array of strings to be checked
   * @return {boolean} true if every element meets the condition, false otherwise
   */
  const checkNonEmptyRow = (row: string[]) => {
    return row.every((x, i, arr) => x === arr[0] && x !== '');
  };

  /**
   * Function to check for a winner and update game state accordingly.
   */
  const checkIsWinner = () => {
    for (const pattern of winningPatterns) {
      if (checkNonEmptyRow(pattern.map(([i, j]) => board[i][j]))) {
        setWin(true);
        return;
      }
    }

    const isDraw = board.every(row => row.every(value => value !== ''));
    if (isDraw) {
      setDraw(true);
    } else {
      setPlayer(prev => (prev === 'X' ? 'O' : 'X'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Players: {player}'s turn to play</Text>
      <Board matrix={board} board={board} onPlay={onPlay} />
      <Button resetGame={resetGame} label={'Reset Game'} />
      {win ? (
        <View testID="winner">
          <WinnerComponent
            label="winner"
            player={player}
            resetGame={resetGame}
          />
        </View>
      ) : null}
      {draw ? (
        <View testID="draw">
          <WinnerComponent
            label={'draw'}
            player={player}
            resetGame={resetGame}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Home;
