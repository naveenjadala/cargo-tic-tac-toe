import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './Button.styles';

type Props = {
  resetGame: () => void;
  label: string;
};

/**
 * Renders a button component with the provided label and onPress function.
 *
 * @param {Props} props - the properties for the button component
 * @return {JSX.Element} the rendered button component
 */
const Button = (props: Props) => {
  return (
    <TouchableOpacity
      testID="resetGame"
      accessibilityRole="button"
      style={styles.container}
      onPress={props.resetGame}>
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
