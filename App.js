import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import  AppLoading  from "expo-app-loading";
import { Asset } from "expo-asset";
import { Provider } from "react-redux";
import Gate from "./components/Gate";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
const cacheImages = images =>
  images.map(image => {
  
      return Asset.fromModule(image).downloadAsync();
    
  });


export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);
  const loadAssets = () => {
    const images = [
      require("./assets/icon.png"),
      require("./assets/favicon.png"),
    ];
    const imagePromise = cacheImages(images);
    return Promise.all([...imagePromise ]);
  };
  return isReady ? (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Gate />
      </PersistGate>
    </Provider>
  ) : (
    <AppLoading
      onError={console.error}
      onFinish={handleFinish}
      startAsync={loadAssets}
    />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
