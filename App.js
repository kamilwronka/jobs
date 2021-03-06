import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      Welcome: { screen: WelcomeScreen },
      Auth: { screen: AuthScreen },
      Main: {
        screen: TabNavigator({
          Map: { screen: MapScreen},
          Deck: { screen: DeckScreen},
          review: {
            screen: StackNavigator({
              Review: { screen: ReviewScreen },
              Settings: { screen: SettingsScreen}
            })
          }
        },
        {
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
          tabBarPosition: 'bottom',
          tabBarComponent: TabBarBottom,
          swipeEnabled: false,
        })
      }
    },
    {
      navigationOptions: {
          tabBarVisible: false
      },
      lazy: true,
      swipeEnabled: false,
    }
    );
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
