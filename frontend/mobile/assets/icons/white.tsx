import React, { Component } from "react";
import { Svg, Path, Defs, G } from "react-native-svg";

class FingerPrint extends Component<{ color?: string }> {
  render() {
    return (
      <Svg
        width="21.921"
        height="13.236"
        viewBox="0 0 21.921 13.236"
        style={
          {
            //backgroundColor: "red"
          }
        }
      >
        <Defs>
          <G transform="matrix(1, 0, 0, 1, 0, 0)">
            <Path
              d="M365.263,3126H349.342l10.41,7.236Z"
              transform="translate(-346.34 -3124)"
              fill="blue"
            />
          </G>
        </Defs>
      </Svg>
    );
  }
}

export default FingerPrint;
