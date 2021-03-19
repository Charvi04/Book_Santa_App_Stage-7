import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './Screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default class App extends React.Component {
  render() { 
  return (
    <AppContainer/>
  );
  } 
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);