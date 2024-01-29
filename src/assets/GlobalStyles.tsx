import {StyleSheet} from 'react-native';
import {colors} from './colors';

/**
 * Creates and returns a StyleSheet object with global styles for the application.
 *
 * @return {Object} The StyleSheet object containing global styles.
 */
const GlobalStyles = () => {
  return StyleSheet.create({
    safeAreaViewContainer: {
      flex: 1,
      minWidth: '100%',
      minHeight: '100%',
      backgroundColor: colors.white,
    },
    screenContainer: {
      height: '100%',
      width: '100%',
    },
    headerTitle: {},
  });
};

export default GlobalStyles;
