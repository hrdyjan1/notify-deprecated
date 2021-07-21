import {PathConfig} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import {HomeParamList, HomeScreens} from './types';
import {defaultStackScreenOptions} from '../../../constants/navigation';

const HomeStack = createStackNavigator<HomeParamList>();
const screenOptions: StackNavigationOptions = {
  ...defaultStackScreenOptions,
  headerTitle: 'Home',
};

const HomePathConfig: PathConfig = {
  screens: {
    [HomeScreens.main]: HomeScreens.main,
  },
};

export {screenOptions, HomePathConfig, HomeStack};
