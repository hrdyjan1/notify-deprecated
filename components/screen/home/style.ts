import {StyleSheet} from 'react-native';
import {FontFamily} from '../../../constants/helpers/fonts';
import {Colours} from '../../../constants/template/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonPrimary: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colours.purple,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  buttonSecondary: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#10A5F5',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: Colours.white,
    fontFamily: FontFamily['wendy-one'],
  },
  headerContainer: {
    flexDirection: 'row',
  },
  scrollingContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  itemPrimary: {
    height: 160,
    width: '50%', // is 50% of container width
  },
  item: {
    height: '22%',
    width: '50%', // is 50% of container width
  },
});

export {styles};
