import React, {useMemo} from 'react';
import {BottomSheetBackdropProps, useBottomSheet} from '@gorhom/bottom-sheet';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {coloredStyles, transparentStyles} from './styles';

const Backdrop = (props: BottomSheetBackdropProps) => {
  const {close} = useBottomSheet();

  const gestureHandler =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>(
      {
        onFinish: () => {
          runOnJS(close)();
        },
      },
      [close],
    );

  // animated variables
  const topAnimatedStyle = useAnimatedStyle(() => ({
    top: interpolate(
      props.animatedIndex.value,
      [0, 1],
      [1000, 0],
      Extrapolate.CLAMP,
    ),
  }));

  const opacityAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      props.animatedIndex.value,
      [1, 1.382],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }));

  // styles
  const innerStyle = useMemo(
    () => [coloredStyles.container, opacityAnimatedStyle],
    [opacityAnimatedStyle],
  );

  const containerStyle = useMemo(
    () => [transparentStyles.container, topAnimatedStyle],
    [topAnimatedStyle],
  );

  return (
    <TapGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={containerStyle}>
        <Animated.View style={innerStyle} />
      </Animated.View>
    </TapGestureHandler>
  );
};

export {Backdrop};
