import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/UserLoginAndSignupScreen';
import { AppTabNavigator } from './components/AppTabNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  UserLoginAndSignupScreen:{screen: UserLoginAndSignup},
  BottomTab:{screen: AppTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
