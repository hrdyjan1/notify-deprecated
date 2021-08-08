import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {isDefined} from '../../constants/helpers/basic';
import useCachedResources from '../../constants/hooks/useCachedResources';
import useColorScheme from '../../constants/hooks/useColorScheme';
import {Colours} from '../../constants/template/Colors';
import {useUserState} from '../../contexts/user';
import Navigation from '../navigation';

function App() {
  const {id} = useUserState();
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();

  const isReady = isLoadingComplete && isDefined(id);

  if (!isReady) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar backgroundColor={Colours.orange} barStyle="light-content" />
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }
}

export {App};
