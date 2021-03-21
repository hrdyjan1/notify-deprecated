import React from 'react';

import { ProfileStack, screenOptions } from './helpers';
import { ProfileScreen } from '../../screen/profile';
import { ProfileScreens } from './types';

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        options={screenOptions}
        component={ProfileScreen}
        name={ProfileScreens.main}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;
