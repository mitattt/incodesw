import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './src/routes/AppStack.tsx';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
