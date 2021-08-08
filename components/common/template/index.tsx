import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {Props} from './types';

function Template({children}: Props) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export {Template};
