import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from './src/reducers/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Font from 'expo-font';

import HomeContainer from './src/containers/HomeContainer';

const Stack = createStackNavigator();
const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

export default class App extends Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    console.log('STORE', store.getState())
    await Font.loadAsync({
      'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'comfortaa-regular': require('./assets/fonts/Comfortaa-Regular.ttf'),
      'comfortaa-bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render () {
    const { fontLoaded } = this.state

    return (
      <Provider store={store}>
        <View style={styles.app}>
          {
            fontLoaded ?
              <NavigationContainer>
                <Stack.Navigator headerMode="none">
                  <Stack.Screen name="HomeContainer" component={HomeContainer} />
                </Stack.Navigator>
              </NavigationContainer>
            : null
          }
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
