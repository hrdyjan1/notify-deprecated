import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import React from 'react';
import {StyleProp, StyleSheet} from 'react-native';
import {Backdrop} from '../backdrop';
import {styles} from './style';

interface Props {
  withBackdrop?: boolean;
  paddingBottom?: number;
  children: React.ReactNode;
  snapPoints: Array<string | number>;
  sheetRef: React.RefObject<BottomSheetMethods>;
}

function BottomModal({
  sheetRef,
  snapPoints,
  children,
  withBackdrop = true,
  paddingBottom = 24,
}: Props) {
  const paddingStyle: StyleProp<{paddingBottom: number}> = {paddingBottom};
  const contentContainerStyle = StyleSheet.compose(
    styles.contentContainer,
    paddingStyle,
  );

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      backdropComponent={withBackdrop ? Backdrop : undefined}>
      <BottomSheetScrollView contentContainerStyle={contentContainerStyle}>
        {children}
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

export {BottomModal};
