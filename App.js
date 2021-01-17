import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/navigator';



export default props => {
  let [fontsLoaded] = useFonts({
    'title-font': require('./assets/fonts/PottaOne-Regular.ttf'),
    'body-font': require('./assets/fonts/AdventPro-ExtraLight.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigator />
  }
};


