import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants';

const fonts = {
  sans: StyleSheet.create({
    text: {
      fontFamily: 'open-sans-regular',
    }
  }),
  comfortaa: StyleSheet.create({
    text: {
      fontFamily: 'comfortaa-regular',
    }
  }),
  comfortaaBold: StyleSheet.create({
    text: {
      fontFamily: 'comfortaa-bold',
    }
  }),
}

export default function useFont(font) {
  return fonts[font]
};