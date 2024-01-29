import {View} from 'react-native';
import React from 'react';

import Tile from '../tile/Tile';
import styles from './Board.styles';
import {boardProps} from './types';

/**
 * Renders a board component based on the provided props.
 *
 * @param {boardProps} props - the props for the board component
 * @return {JSX.Element} the rendered board component
 */
const Board = (props: boardProps) => {
  return (
    <View>
      {props.matrix.map((row, i) => (
        <View style={styles.container} key={i}>
          {row.map((col, j) => (
            <Tile
              testID={`tile-${i}${j}`}
              key={`${i}${j}`}
              play={() => props.onPlay(i, j)}
              boardValue={props.board[i][j]}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Board;
