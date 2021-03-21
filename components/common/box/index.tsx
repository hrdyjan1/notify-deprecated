import React from 'react'
import { View as DefaultView } from 'react-native';

import { ThemeProps } from '../../../constants/types/theme';
import { useThemeColor } from '../../../constants/hooks/useThemeColor';

export type ViewProps = ThemeProps & DefaultView['props'];

function Box(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export { Box };
