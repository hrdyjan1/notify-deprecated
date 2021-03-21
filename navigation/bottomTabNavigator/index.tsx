import * as React from 'react';

import { BottomTabScreens } from './types';
import HomeNavigator from '../homeNavigator';
import useColorScheme from '../../constants/hooks/useColorScheme';
import ProfileNavigator from '../profileNavigator';
import { BottomTab, getTabBarOptionsFromScheme, getScreenOptions } from './helpers';

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const tabBarOptions = getTabBarOptionsFromScheme(colorScheme);
  const homeTabOptions = getScreenOptions(BottomTabScreens.Home);
  const profileTabOptions = getScreenOptions(BottomTabScreens.Profile);

  return (
    <BottomTab.Navigator initialRouteName={BottomTabScreens.Home} tabBarOptions={tabBarOptions}>
      <BottomTab.Screen
        component={HomeNavigator}
        name={BottomTabScreens.Home}
        options={homeTabOptions}
      />
      <BottomTab.Screen
        name={BottomTabScreens.Profile}
        component={ProfileNavigator}
        options={profileTabOptions}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
