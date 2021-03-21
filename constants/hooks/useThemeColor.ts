import { Theme } from '../template/Colors';
import useColorScheme from './useColorScheme';

type Props = { light?: string; dark?: string };
type ColorName = keyof typeof Theme.light & keyof typeof Theme.dark;

function useThemeColor(props: Props, colorName: ColorName) {
  const scheme = useColorScheme();
  const colorFromProps = props[scheme];

  return colorFromProps ? colorFromProps : Theme[scheme][colorName];
}

export { useThemeColor };
