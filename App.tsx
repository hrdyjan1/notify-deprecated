import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './components/navigation';
import {isDefined} from './constants/helpers/basic';
import useCachedResources from './constants/hooks/useCachedResources';
import useColorScheme from './constants/hooks/useColorScheme';
import {Colours} from './constants/template/Colors';
import {UserProvider, useUserState} from './contexts/user';

function AppContainer() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

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

export default AppContainer;
