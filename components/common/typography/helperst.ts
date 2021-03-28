import { StyleProp, TextStyle } from 'react-native';

import { styles } from './style';
import { TextVariant } from '../../../constants/types/text';

function useVariantStyle(variant?: TextVariant): StyleProp<TextStyle> {
  switch (variant) {
    case TextVariant.navHeader:
      return styles.navHeader;
    default:
      return styles.default;
  }
}

export { useVariantStyle };
