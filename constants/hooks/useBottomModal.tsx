import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import React from 'react';
import {EmptyFunction} from '../types/basics';

type SnapPoints = Array<string | number>;

type BottomModalProps = {
  sheetRef: React.RefObject<BottomSheetMethods>;
  open: EmptyFunction;
  close: EmptyFunction;
  openTo: (index: number) => void;
} & Settings;

interface Settings {
  snapPoints: SnapPoints;
  withBackdrop?: boolean;
}

function useBottomModal({
  snapPoints,
  withBackdrop,
}: Settings): BottomModalProps {
  // hooks
  const sheetRef = React.useRef<BottomSheet>(null);

  // callbacks
  // index => snapPoints position
  const openTo = React.useCallback(
    (index: number) => sheetRef.current?.snapTo(index),
    [],
  );

  const close = React.useCallback(() => sheetRef.current?.close(), []);

  const open = React.useCallback(() => openTo(1), [openTo]);

  return {open, openTo, close, sheetRef, snapPoints, withBackdrop};
}

export {useBottomModal, BottomModalProps, Settings};
