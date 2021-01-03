import { PathConfig } from '@react-navigation/native';
import { HomeScreens } from './types';

const HomePathConfig: PathConfig = {
  screens: {
    [HomeScreens.main]: HomeScreens.main,
  },
};

export { HomePathConfig };
