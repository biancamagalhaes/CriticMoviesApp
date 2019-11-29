import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import Expedition from "containers/Expedition";
import Dashboard from "containers/Dashboard";
import Pdf from "containers/Pdf";

export const DashboardStack = createStackNavigator({
  ["App/Dashboard/Task"]: {
    screen: Dashboard,
    navigationOptions: {
      header: () => null
    }
  },
  ["App/Dashboard/Item"]: {
    screen: (p: any) => (
      <Expedition
        routes={{ imageRoute: "App/OP/Image", pdfRoute: "App/OP/Pdf" }}
        {...p}
      />
    ),
    navigationOptions: {
      header: () => null
    }
  },
  ["App/Dashboard/Link"]: {
    screen: Pdf,
    navigationOptions: {
      header: () => null
    }
  }
});

export const AppStack = createStackNavigator(
  {
    App: {
      screen: DashboardStack
    }
  },
  {
    initialRouteName: "App",
    headerMode: "none",
    mode: "modal",
    transparentCard: true,
    cardStyle: { opacity: 1 }
  }
);

const AuthStack = createSwitchNavigator(
  {
    App: {
      screen: AppStack
    }
  },
  {
    initialRouteName: "App"
  }
);

const AppContainer = createAppContainer(AuthStack);

export default AppContainer;
