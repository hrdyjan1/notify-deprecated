import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/Home';
import { HomeParamList, HomeScreens } from './types';

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={HomeScreens.main}
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
