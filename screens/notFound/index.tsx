import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import {styles} from './style'
import {Props} from './types'

function NotFoundScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}


export {NotFoundScreen}