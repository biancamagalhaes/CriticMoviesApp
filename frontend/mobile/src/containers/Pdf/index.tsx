import React from "react";
import { View, WebView } from "react-native";
import {
  NavigationTransitionProps,
  NavigationScreenProps
} from "react-navigation";

class Pdf extends React.Component<
  NavigationScreenProps & NavigationTransitionProps
> {
  render() {
    const link = this.props.navigation.getParam("link");
    return (
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View
          style={{
            position: "relative",
            flex: 1,
            overflow: "hidden",
            marginTop: 15
          }}
        >
          <WebView
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffff"
            }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: link }}
          />
        </View>
      </View>
    );
  }
}
export default Pdf;
