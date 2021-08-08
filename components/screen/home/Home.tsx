import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useBottomModal} from '../../../constants/hooks/useBottomModal';
import {ReorderBottomModal} from './components/ReorderBottomModal';
import {data, ReorderModalSettings, TmpModalSettings} from './helpers';
import {styles} from './style';

const Home = () => {
  const reorderModalProps = useBottomModal(ReorderModalSettings);
  const tmpModalProps = useBottomModal(TmpModalSettings);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.itemPrimary}>
          <TouchableOpacity
            onPress={tmpModalProps.open}
            style={styles.buttonPrimary}>
            <Text style={styles.text}>Text</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemPrimary}>
          <TouchableOpacity
            onPress={tmpModalProps.open}
            style={styles.buttonPrimary}>
            <Text style={styles.text}>Text</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollingContainer}>
        {data.map(({text}) => (
          <View style={styles.item} key={text}>
            <TouchableOpacity
              onPress={reorderModalProps.open}
              style={styles.buttonSecondary}>
              <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <ReorderBottomModal
        {...reorderModalProps}
        onReject={reorderModalProps.close}
        onAccept={reorderModalProps.close}
      />
      <ReorderBottomModal
        {...tmpModalProps}
        onReject={tmpModalProps.close}
        onAccept={tmpModalProps.close}
      />
    </View>
  );
};

export {Home};
