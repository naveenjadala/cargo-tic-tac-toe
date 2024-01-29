import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    height: 50,
    width: '80%',
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray,
  },
  text: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default styles;
