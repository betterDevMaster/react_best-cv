import React from 'react';
import { Text } from 'react-native';

import useFont from './styles';

const MyText = ({ font, style, children }) => {
  const styles = useFont(font ? font : 'sans')

  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}

export { MyText };
