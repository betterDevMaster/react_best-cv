import React, { Component } from 'react';
import { MyText } from '..';
import { COLORS } from '../../constants';
import { View, TouchableHighlight } from 'react-native';

import useTheme from './styles';

export class Button extends Component {
  state = {
    isActive: false
  }

  render() {
    const { theme, children, style, onClick } = this.props
    const { isActive } = this.state
    const styles = useTheme(theme)

    return (
      <TouchableHighlight
      style={[styles.button, style]}
      underlayColor={COLORS[`${theme}Active`]}
      onPress={onClick}>
        <View>
          <MyText style={styles.text}>{children}</MyText>
        </View>
      </TouchableHighlight>
    )
  }
}
