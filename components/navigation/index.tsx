import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {RootNavigator} from './rootNavigator';
import {NavigationProps as Props} from './types';
import {getColorTheme, LinkingOptions} from './helpers';

function Navigation({colorScheme}: Props) {
  const theme = getColorTheme(colorScheme);

  return (
    <NavigationContainer linking={LinkingOptions} theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
