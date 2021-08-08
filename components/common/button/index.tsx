import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Props} from './types';

function Button({children}: Props) {
  return <TouchableOpacity>{children}</TouchableOpacity>;
}

export {Button};
