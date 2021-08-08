import React from 'react';
import {HomeScreen} from '../../screen/home';
import {HomeStack, screenOptions} from './helpers';
import {HomeScreens} from './types';

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        component={HomeScreen}
        name={HomeScreens.main}
        options={screenOptions}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
