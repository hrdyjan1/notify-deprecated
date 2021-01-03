import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../../screens/Profile';
import { ProfileParamList, ProfileScreens } from './types';

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={ProfileScreens.main}
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;
