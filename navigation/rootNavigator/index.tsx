import React from 'react';

import { RootScreens } from './types';
import {NotFoundScreen} from '../../screens/notFound';
import BottomTabNavigator from '../bottomTabNavigator/index';
import { screenOptions, screenNotFoundOptions, Stack } from './helpers';

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={RootScreens.Root} component={BottomTabNavigator} />
      <Stack.Screen name={RootScreens.NotFound} component={NotFoundScreen} options={screenNotFoundOptions} />
    </Stack.Navigator>
  );
}

export {RootNavigator};
