import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { ProfileParamList, ProfileScreens } from './types';

const ProfileStack = createStackNavigator<ProfileParamList>();
const screenOptions: StackNavigationOptions = { headerTitle: 'Profile' };

const ProfilePathConfig = {
  screens: {
    [ProfileScreens.main]: ProfileScreens.main,
  },
};

export { screenOptions, ProfilePathConfig, ProfileStack };
