import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Account from '../screens/Account';
import SettingsScreen from '../screens/SettingsScreen';
import CardScreen from "../components/CardScreen";
import Register from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword"

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
      Home: HomeScreen,
      CardScreen:CardScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Accueil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused} name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`: 'md-information-circle'}/>
  ),
};

HomeStack.path = '';

const AccountStack = createStackNavigator(
  {
    Account: Account,
    Register:Register,
    ForgotPassword:ForgotPassword
  },
  config
);

AccountStack.navigationOptions = {
  tabBarLabel: 'Mon compte',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

AccountStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Paramètres',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  AccountStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
