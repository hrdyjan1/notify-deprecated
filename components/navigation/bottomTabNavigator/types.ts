import { ParamListBase, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export enum BottomTabScreens {
  Home = 'Home',
  Profile = 'Profile',
}

export type BottomTabParamList = {
  [BottomTabScreens.Home]: undefined;
  [BottomTabScreens.Profile]: undefined;
};

export type OptionsType =
  | BottomTabNavigationOptions
  | ((props: {
      route: RouteProp<ParamListBase, keyof ParamListBase>;
      navigation: any;
    }) => BottomTabNavigationOptions);
