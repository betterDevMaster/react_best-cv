import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const buttonBase = {
  borderRadius: 4,
  minHeight: 30,
  minWidth: 30,
  paddingHorizontal: 13.5,
  paddingVertical: 9,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
}

const textBase = {
  fontWeight: 'bold',
  fontSize: 14,
  textTransform: 'uppercase',
  lineHeight: 16,
  marginLeft: 7.5,
  marginRight: 7.5,
}

const themes = {
  control: StyleSheet.create({
    button: {
      ...buttonBase,
      backgroundColor: COLORS.control,
    },
    text: {
      ...textBase,
      color: COLORS.fontBlack,
    },
  }),
  primary: StyleSheet.create({
    button: {
      ...buttonBase,
      backgroundColor: COLORS.primary,
    },
    text: {
      ...textBase,
      color: COLORS.fontWhite,
    }
  })
}

export default function useTheme(theme) {
  return themes[theme]
};