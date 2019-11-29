import React, { Component } from "react";
import { Svg, Path, G } from "react-native-svg";
import { View, Text } from "react-native";
import {verticalScale} from "utility";

class Completed extends Component<{
  color?: string;
  width?: string;
  height?: string;
  size?: number;
}> {
  render() {
    const { width, height, size } = this.props;
    return (
      <View style={{ justifyContent: "center", width: 60 }}>
        <Svg
          width={width || "20"}
          height={height || "20"}
          viewBox="0 0 18 18"
          style={{ alignSelf: "center" }}
        >
          <G transform="translate(-330 -353)">
            <Path
              id="ic_panorama_fish_eye_24px"
              d="M11,2a9,9,0,1,0,9,9A8.992,8.992,0,0,0,11,2Zm0,16.2A7.2,7.2,0,1,1,18.2,11,7.21,7.21,0,0,1,11,18.2Z"
              transform="translate(328 351)"
              fill="#1dac27"
            />
            <Path
              id="ic_check_24px"
              d="M6.164,10.8,4.11,8.748l-.7.695L6.164,12.2l5.912-5.912-.695-.695Z"
              transform="translate(331.59 353.213)"
              fill="#1dac27"
            />
          </G>
        </Svg>
        <Text
          style={{
            fontSize: size || verticalScale(9),
            color: "#1dac27",
            textAlign: "center"
          }}
        >
          Concluido
        </Text>
      </View>
    );
  }
}

export default Completed;
