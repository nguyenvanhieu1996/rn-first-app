import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppHeader from './src/Navigation/AppHeader';
import { Provider } from 'react-redux'
import store from './src/Store'
import { PersistGate } from 'redux-persist/integration/react'
import {} from '@babel/core'
const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppHeader />
        </View>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App
