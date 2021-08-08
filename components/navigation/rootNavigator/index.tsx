import React from 'react';
import {NotFoundScreen} from '../../screen/notFound';
import BottomTabNavigator from '../bottomTabNavigator/index';
import {screenOptions, Stack} from './helpers';
import {screenNotFoundOptions} from './notFoundHelpers';
import {RootScreens} from './types';

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

export {RootNavigator};
