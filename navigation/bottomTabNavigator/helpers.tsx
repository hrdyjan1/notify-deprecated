import React from 'react'
import { ColorSchemeName } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Theme} from '../../constants/template/Colors';
import {TabBarIcon} from '../../components/navigation/tabBarIcon';
import { BottomTabParamList, BottomTabScreens, OptionsType } from './types';


function getTabBarOptionsFromScheme(colorScheme: NonNullable<ColorSchemeName>) {
  return { activeTintColor: Theme[colorScheme].tint };
}

function getScreenOptions(screen: BottomTabScreens): OptionsType {
  return {
    tabBarIcon: ({ color }) => <TabBarIcon name='ios-code' color={color} />,
  };
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export { getScreenOptions, getTabBarOptionsFromScheme, BottomTab };
