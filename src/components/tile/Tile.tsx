import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './Tile.styles';
import {tileProps} from './types';

/**
 * Renders a Tile component with the specified props.
 *
 * @param {tileProps} props - The props for the Tile component
 * @return {JSX.Element} The rendered Tile component
 */
const Tile = (props: tileProps) => {
  return (
    <TouchableOpacity
      testID={props.testID}
      accessibilityRole="button"
      style={styles.container}
      onPress={props.play}>
      <Text testID="tile" style={styles.text}>
        {props.boardValue}
      </Text>
    </TouchableOpacity>
  );
};

export default Tile;
