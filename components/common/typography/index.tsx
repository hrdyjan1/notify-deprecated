import React from 'react'
import { Text as DefaultText } from 'react-native';

import { ThemeProps } from '../../../constants/types/theme';
import { useThemeColor } from '../../../constants/hooks/useThemeColor';

export type TextProps = ThemeProps & DefaultText['props'];

function Typography(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export { Typography };
