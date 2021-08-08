import {FontAwesome} from '@expo/vector-icons';
import React from 'react';
import {isDefined} from '../../../constants/helpers/basic';
import {isNumber} from '../../../constants/helpers/numbers';
import {Sizes} from '../../../constants/template/Sizes';
import {IconSize} from '../../../constants/types/icons';

const glyphMap = FontAwesome.getRawGlyphMap();

interface Props {
  name: keyof typeof glyphMap;
  color: string;
  // Default is 30
  size?: number | IconSize;
}

function generateIconSize(size?: number | IconSize) {
  if (!isDefined(size) || isNumber(size)) {
    return size ?? Sizes.icon.normal;
  } else {
    switch (size) {
      case IconSize.small:
        return Sizes.icon.small;
      case IconSize.normal:
        return Sizes.icon.normal;
      case IconSize.big:
        return Sizes.icon.big;
      default:
        return Sizes.icon.normal;
    }
  }
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon({color, name, size = Sizes.icon.normal}: Props) {
  return (
    <FontAwesome size={generateIconSize(size)} name={name} color={color} />
  );
}

export {TabBarIcon};
