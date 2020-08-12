import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/state/store';
import Navigator from '@routes';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
