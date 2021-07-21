import React from 'react';
import {Text as DefaultText} from 'react-native';

import {TextProps} from './types';
import {useVariantStyle} from './helperst';
import {useThemeColor} from '../../../constants/hooks/useThemeColor';

function Typography(props: TextProps) {
  const {style, variant, lightColor, darkColor, ...otherProps} = props;

  // Hooks
  const variantStyle = useVariantStyle(variant);
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

  return <DefaultText style={[{color}, variantStyle, style]} {...otherProps} />;
}

export {Typography};
