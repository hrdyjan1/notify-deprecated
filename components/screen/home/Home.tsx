import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import React, {useCallback, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Backdrop} from '../../common/backdrop';
import {styles} from './style';

// variables
const snapPoints = [0, '38%', '100%'];

const data = Array(50)
  .fill(0)
  .map((_, index) => `index-${index}`);

const Home = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handeExpand = useCallback(() => {
    sheetRef.current?.snapTo(1);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handeExpand} style={styles.button}>
        <Text>Open</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backdropComponent={Backdrop}>
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {data.map(a => (
            <Text key={a}>{a}</Text>
          ))}
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export {Home};
