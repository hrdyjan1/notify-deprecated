import {Theme} from '../template/Colors';
import useColorScheme from './useColorScheme';

interface Props {
  light?: string;
  dark?: string;
}
type ColorName = keyof typeof Theme.light & keyof typeof Theme.dark;

function useThemeColor(props: Props, colorName: ColorName) {
  const scheme = useColorScheme();
  const colorFromProps = props[scheme];

  return colorFromProps ?? Theme[scheme][colorName];
}

export {useThemeColor};
