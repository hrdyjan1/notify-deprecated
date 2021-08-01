import React, {useCallback, useRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {Backdrop} from '../../common/backdrop';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: '#10A5F5',
    zIndex: 999,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});

export {Home};
