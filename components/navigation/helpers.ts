import * as Linking from 'expo-linking';
import {ColorSchemeName} from 'react-native';
import {
  DefaultTheme,
  DarkTheme,
  LinkingOptions as LinkingOptionsType,
} from '@react-navigation/native';

import {RootScreens} from './rootNavigator/types';
import {RootPathConfigMap} from './rootNavigator/helpers';

function getColorTheme(colorScheme: ColorSchemeName) {
  return colorScheme === 'dark' ? DarkTheme : DefaultTheme;
}

const LinkingOptions: LinkingOptionsType = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      [RootScreens.Root]: RootPathConfigMap.Root,
      [RootScreens.NotFound]: RootPathConfigMap.NotFound,
    },
  },
};

export {LinkingOptions, getColorTheme};
