import React from "react";
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { BackHandler } from "react-native";
import AppContainer from "./config/Routes";
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = configureStore({} as any);



export default class App extends React.Component {
  state = {
    isReady: false
  };

  async _cacheResourcesAsync() {
    try {
      await Font.loadAsync({
        "Futura-Lt": require("assets/fonts/Futura_LT_Extra_Bold_Oblique.ttf"),
        "Mosk-Bold": require("assets/fonts/mosk-bold-700.ttf"),
        "Sans-SemiBold": require("assets/fonts/mosk-medium-500.ttf"),
        "Mosk-Medium": require("assets/fonts/SourceSansPro-Semibold.ttf")
      });

      const images: any[] = [
        require("assets/images/Bg-dark.png"),
        require("assets/images/Bg-login.png"),
        require("assets/images/image.png"),
        require("assets/icons/fav_icon.png"),
        require("assets/icons/fav_icon.png"),
        require("assets/icons/marca-branca.png"),
        require("assets/icons/production-icon.png")
      ];
      const cacheImages = images.map(image => {
        return Asset.fromModule(image).downloadAsync();
      });

      await Promise.all(cacheImages);
    } catch (e) {
      (e);
    }
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    // prevent exit with back button
    return true;
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
