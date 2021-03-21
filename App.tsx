import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './components/navigation';
import useColorScheme from './constants/hooks/useColorScheme';
import useCachedResources from './constants/hooks/useCachedResources';
import { Colors } from './constants/template/Colors';

function App() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar backgroundColor={Colors.orange} style='dark'/>
      </SafeAreaProvider>
    );
  }
}

export default App;
