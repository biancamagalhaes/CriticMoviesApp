import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, Text } from "react-native";

class Timelapse extends Component<{
  color?: string;
  width?: string;
  height?: string;
  size?: number;
}> {
  render() {
    const { width, height, size } = this.props;
    return (
      <View style={{ justifyContent: "center", width: 50 }}>
        <Svg
          width={width || "25"}
          height={height || "25"}
          viewBox="0 0 18 18"
          style={{ alignSelf: "center" }}
        >
          <Path
            id="ic_fingerprint_24px"
            d="M14.816,7.184A5.377,5.377,0,0,0,11,5.6V11L7.184,14.816a5.4,5.4,0,1,0,7.632-7.632ZM11,2a9,9,0,1,0,9,9A9,9,0,0,0,11,2Zm0,16.2A7.2,7.2,0,1,1,18.2,11,7.2,7.2,0,0,1,11,18.2Z"
            transform="translate(-2 -2)"
            fill="#fb0"
          />
        </Svg>
        <Text
          style={{ fontSize: size || 10, color: "#fb0", textAlign: "center" }}
        >
          Em execução
        </Text>
      </View>
    );
  }
}

export default Timelapse;
