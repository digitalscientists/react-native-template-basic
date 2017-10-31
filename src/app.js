/**
* @providesModule App
*/

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import MainScreen from 'MainScreen';

const App = StackNavigator({
  Main: {screen: MainScreen},
}, {
  headerMode: 'none'
});

//Copied from https://reactnavigation.org/docs/guides/screen-tracking#Screen-tracking
function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

export default () => (
  <App
    onNavigationStateChange={(prevState, currentState) => {
      const currentScreen = getCurrentRouteName(currentState);
      const prevScreen = getCurrentRouteName(prevState);

      console.log(prevScreen, currentScreen)
    }}
  />
)
