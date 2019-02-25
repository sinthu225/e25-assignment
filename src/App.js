import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './Store/StoreConfigurator';
import MainComponent from './Components/MainComponent';

import '../src/App.scss';

const { store, persistor } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <MainComponent /> 
      </PersistGate>
    </Provider>
    );
  }
}

export default App;
