import { PathConfig } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { RootScreens, RootStackParamList } from './types';
import { HomePathConfig } from '../homeNavigator/helpers';
import { BottomTabScreens } from '../bottomTabNavigator/types';
import { ProfilePathConfig } from '../profileNavigator/helpers';

const Stack = createStackNavigator<RootStackParamList>();
const screenOptions: StackNavigationOptions = { headerShown: false };
const screenNotFoundOptions: StackNavigationOptions = { title: 'Oops!' };

const RootPathConfig: string | PathConfig = {
  screens: {
    [BottomTabScreens.Home]: HomePathConfig,
    [BottomTabScreens.Profile]: ProfilePathConfig,
  },
};

const RootNotFoundConfig: string | PathConfig = '*'

const RootPathConfigMap = {
  [RootScreens.Root]: RootPathConfig,
  [RootScreens.NotFound]: RootNotFoundConfig,
};

export { Stack, RootPathConfigMap, screenNotFoundOptions, screenOptions };
