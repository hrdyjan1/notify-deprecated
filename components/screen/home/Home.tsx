import React, {useCallback, useRef, useMemo} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

// variables
const data = Array(10)
  .fill(0)
  .map((_, index) => `index-${index}`);

const Content = ({handleOnLayoutContent}) => (
  <View onLayout={handleOnLayoutContent}>
    {data.map(a => (
      <Text key={a}>{a}</Text>
    ))}
  </View>
);

const Home = () => {
  const [contentHeight, setContentHeight] = React.useState<number>(0);

  const maxHeight = useMemo(() => Math.min(contentHeight), [contentHeight]);

  const handleOnLayoutContent = useCallback(
    ({
      nativeEvent: {
        layout: {height},
      },
    }) => {
      setContentHeight(height);
    },
    [],
  );

  const component = <Content handleOnLayoutContent={handleOnLayoutContent} />;

  if (contentHeight !== 0) {
    return <Inner component={component} maxHeight={maxHeight} />;
  }

  return component;
};

const Inner = ({component, maxHeight}) => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  console.log(maxHeight);
  const snapPoints = useMemo(() => [0, maxHeight], [maxHeight]);

  console.log(maxHeight);

  // callbacks
  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);
  const handeExpand = useCallback(index => {
    sheetRef.current?.expand();
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  //   const handleOnLayoutPage = useCallback(
  //     ({
  //       nativeEvent: {
  //         layout: {height},
  //       },
  //     }) => {
  //       setPageHeight(height);
  //     },
  //     [],
  //   );

  return (
    <View style={styles.container}>
      <Button title="Expand" onPress={handeExpand} />
      <Button title="Close" onPress={() => handleClosePress()} />
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}>
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {component}
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
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});

export {Home};
