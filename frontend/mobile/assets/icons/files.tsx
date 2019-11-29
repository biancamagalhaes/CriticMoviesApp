import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";

class Files extends Component<{ color?: string }> {
  render() {
    return (
      <Svg width="27.636" height="32" viewBox="0 0 27.636 32">
        <Path
          d="M22.364,1H4.909A2.918,2.918,0,0,0,2,3.909V24.273H4.909V3.909H22.364Zm4.364,5.818h-16A2.918,2.918,0,0,0,7.818,9.727V30.091A2.918,2.918,0,0,0,10.727,33h16a2.918,2.918,0,0,0,2.909-2.909V9.727A2.918,2.918,0,0,0,26.727,6.818Zm0,23.273h-16V9.727h16Z"
          transform="translate(-2 -1)"
          fill="#fff"
        />
      </Svg>
    );
  }
}

export default Files;
