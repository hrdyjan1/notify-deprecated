import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Navigation from './components/navigation';
import useColorScheme from './constants/hooks/useColorScheme';
import useCachedResources from './constants/hooks/useCachedResources';
import { Colours } from './constants/template/Colors';

function App() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
          <StatusBar backgroundColor={Colours.orange} barStyle='light-content'/>
          <Navigation colorScheme={colorScheme}/>
      </SafeAreaProvider>
    );
  }
}

export default App;
