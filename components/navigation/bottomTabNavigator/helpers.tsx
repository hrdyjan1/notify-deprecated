import React from 'react';
import { ColorSchemeName } from 'react-native';
import { BottomTabBarOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Colours, Theme } from '../../../constants/template/Colors';
import { TabBarIcon } from '../tabBarIcon';
import { BottomTabParamList, BottomTabScreens, OptionsType } from './types';
import { IconSize } from '../../../constants/types/icons';

const defaultScreenOptions = {};

function getTabBarOptionsFromScheme(
  colorScheme: NonNullable<ColorSchemeName>
): BottomTabBarOptions {
  return {
    showLabel: false,
    inactiveTintColor: Theme[colorScheme].inactiveTint,
    activeTintColor: Theme[colorScheme].tint,
    style: {
      backgroundColor: Colours.orange,
    },
  };
}

function getScreenOptions(screen: BottomTabScreens): OptionsType {
  switch (screen) {
    case BottomTabScreens.Home:
      return {
        ...defaultScreenOptions,
        tabBarIcon: ({ color, focused }) => <TabBarIcon name='home' color={color} size={focused ? IconSize.big : IconSize.normal} />,
      };
    case BottomTabScreens.Profile:
      return {
        ...defaultScreenOptions,
        tabBarIcon: ({ color, focused }) => <TabBarIcon name='user' color={color} size={focused ? IconSize.big : IconSize.normal} />,
      };
    default:
      return defaultScreenOptions;
  }
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export { getScreenOptions, getTabBarOptionsFromScheme, BottomTab };
