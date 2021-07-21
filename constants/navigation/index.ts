import {StackNavigationOptions} from '@react-navigation/stack';
import {FontFamily} from '../helpers/fonts';
import {Colours} from '../template/Colors';
import {Sizes} from '../template/Sizes';

const defaultStackScreenOptions: StackNavigationOptions = {
  headerTintColor: Colours.white,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: Sizes.navHeader,
    fontFamily: FontFamily['wendy-one'],
  },
  headerStyle: {
    backgroundColor: Colours.orange,
  },
};

export {defaultStackScreenOptions};
