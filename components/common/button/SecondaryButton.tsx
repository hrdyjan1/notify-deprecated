import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {noop} from '../../../constants/helpers/basic';
import {FontFamily} from '../../../constants/helpers/fonts';
import {Colours} from '../../../constants/template/Colors';
import {Sizes} from '../../../constants/template/Sizes';
import {Props} from './types';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    minHeight: Sizes.base * 3,
    justifyContent: 'center',
    borderRadius: Sizes.radius,
    backgroundColor: Colours.grey,
  },
  text: {
    color: Colours.white,
    fontSize: Sizes.base,
    fontFamily: FontFamily['wendy-one'],
  },
});

function SecondaryButton({children, onPress = noop}: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

export {SecondaryButton};
