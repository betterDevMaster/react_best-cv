import React from 'react';
import { MyText } from '..';
import { View } from 'react-native';

import styles from './styles';

const Logo = ({ style }) => {
  return (
    <View>
      <MyText
      font='comfortaaBold'
      style={[styles.text, style]}
      >
        best cv
      </MyText>
    </View>
  )
}

export { Logo };
