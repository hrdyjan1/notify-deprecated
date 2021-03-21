import React from 'react';

import { HomeScreen } from '../../screen/home';
import { HomeScreens } from './types';
import { HomeStack, screenOptions } from './helpers';

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
