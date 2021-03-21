import { PathConfig } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';

const RootNotFoundConfig: string | PathConfig = '*';
const screenNotFoundOptions: StackNavigationOptions = { title: 'Oops!' };

export { RootNotFoundConfig, screenNotFoundOptions };
