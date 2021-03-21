import React from 'react';

import { RootScreens } from './types';
import { screenOptions, Stack } from './helpers';
import { NotFoundScreen } from '../../screen/notFound';
import { screenNotFoundOptions } from './notFoundHelpers';
import BottomTabNavigator from '../bottomTabNavigator/index';

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={RootScreens.Root} component={BottomTabNavigator} />
      <Stack.Screen
        component={NotFoundScreen}
        name={RootScreens.NotFound}
        options={screenNotFoundOptions}
      />
    </Stack.Navigator>
  );
}

export { RootNavigator };
