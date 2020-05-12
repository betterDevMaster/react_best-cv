import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  logo: {
    marginBottom: 45,
  },
  loginButton: {
    marginBottom: 11.25,
  },
  loginText: {
    color: COLORS.fontWhite,
    fontSize: 11,
    letterSpacing: 1.4,
  }
})

export default styles;