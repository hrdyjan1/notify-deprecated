import {Text as DefaultText} from 'react-native';

import {ThemeProps} from '../../../constants/types/theme';
import {TextVariantProp} from '../../../constants/types/text';

export type TextProps = ThemeProps & TextVariantProp & DefaultText['props'];
