import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Props } from './types';
import { styles } from './styles';

function Template(children: Props) {
  return <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>;
}

export { Template };
