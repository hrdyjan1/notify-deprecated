import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { defaultStackScreenOptions } from '../../../constants/navigation';
import { ProfileParamList, ProfileScreens } from './types';

const ProfileStack = createStackNavigator<ProfileParamList>();
const screenOptions: StackNavigationOptions = {
  ...defaultStackScreenOptions,
  headerTitle: 'Profile',
};

const ProfilePathConfig = {
  screens: {
    [ProfileScreens.main]: ProfileScreens.main,
  },
};

export { screenOptions, ProfilePathConfig, ProfileStack };
