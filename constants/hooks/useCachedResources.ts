import {Ionicons} from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import {FontFamily} from '../helpers/fonts';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
          [FontFamily[
            'serif-pro'
          ]]: require('../../assets/fonts/SourceSerifPro-Regular.ttf'),
          [FontFamily[
            'wendy-one'
          ]]: require('../../assets/fonts/WendyOne-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        SplashScreen.hideAsync();
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
