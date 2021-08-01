import {StyleSheet} from 'react-native';
import {Colours} from '../../../constants/template/Colors';

const coloredStyles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    opacity: 0,
    backgroundColor: Colours.orange,
  },
});

const transparentStyles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export {coloredStyles, transparentStyles};
