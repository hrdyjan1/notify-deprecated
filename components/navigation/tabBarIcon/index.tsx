import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const glyphMap = Ionicons.getRawGlyphMap();

type Props = {
  name: keyof typeof glyphMap;
  color: string;
};

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon({ color, name }: Props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} name={name} color={color} />;
}

export {TabBarIcon};
