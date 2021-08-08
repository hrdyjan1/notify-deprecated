import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BottomModalProps} from '../../../../constants/hooks/useBottomModal';
import {Sizes} from '../../../../constants/template/Sizes';
import {EmptyFunction} from '../../../../constants/types/basics';
import {BottomModal} from '../../../common/bottomModal';
import {PrimaryButton} from '../../../common/button/PrimaryButton';
import {SecondaryButton} from '../../../common/button/SecondaryButton';

type Props = {
  onAccept: EmptyFunction;
  onReject: EmptyFunction;
} & BottomModalProps;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: Sizes.padding,
  },
  buttonContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: Sizes.padding,
  },
});

function ReorderBottomModal(props: Props) {
  const {onAccept, onReject, ...rest} = props;
  return (
    <BottomModal {...rest}>
      <View style={styles.innerContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onAccept}>
            <Text>Accept</Text>
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <SecondaryButton onPress={onReject}>
            <Text>Cancel</Text>
          </SecondaryButton>
        </View>
      </View>
    </BottomModal>
  );
}

export {ReorderBottomModal};
