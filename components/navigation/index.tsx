import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {getColorTheme, LinkingOptions} from './helpers';
import {RootNavigator} from './rootNavigator';
import {NavigationProps as Props} from './types';

function Navigation({colorScheme}: Props) {
  const theme = getColorTheme(colorScheme);

  return (
    <NavigationContainer linking={LinkingOptions} theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
