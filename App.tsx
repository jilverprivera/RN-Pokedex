import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/navigation/Navigator';
import {ContextProvider} from './src/context/context';

const AppState = ({children}: any) => {
  return <ContextProvider>{children}</ContextProvider>;
};
const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigation />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
