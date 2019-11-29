import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, Text } from "react-native";
import {verticalScale} from 'utility';

class Clock extends Component<{
  color?: string;
  width?: string;
  height?: string;
  size?: number;
}> {
  render() {
    const { width, height, size, color } = this.props;
    return (
      <View style={{ justifyContent: "center", width: 50 }}>
        <Svg
          width={width || "20"}
          height={height || "25"}
          viewBox="0 0 15.428 18"
          style={{ alignSelf: "center" }}
        >
          <Path
            id="ic_fingerprint_24px"
            d="M13.286,1H8.143V2.714h5.143ZM9.857,12.143h1.714V7H9.857ZM16.74,6.477,17.957,5.26a9.47,9.47,0,0,0-1.209-1.209L15.531,5.269A7.714,7.714,0,1,0,16.74,6.477ZM10.714,17.286a6,6,0,1,1,6-6A6,6,0,0,1,10.714,17.286Z"
            transform="translate(-3 -1)"
            fill= {color}
          />
        </Svg>
        <Text
          style={{
            fontSize: size || verticalScale(10),
            color: color,
            textAlign: "center"
          }}
        >
          {color === "red" ? "Atrasado" : "À iniciar"}
        </Text>
      </View>
    );
  }
}

export default Clock;
