import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";

class Photo extends Component<{ color?: string, width?: number, height?: number }> {
  render() {
    const { color, width, height } = this.props;
    return (
      <Svg
        width= {width || "25"}
        height= {height || "30"}
        viewBox="0 0 18 15.609"
        style={{ alignSelf: "center" }}
      >
        <Path
          id="ic_fingerprint_24px"
          d="M2.087,3.087V1H3.478V3.087H5.565V4.478H3.478V6.565H2.087V4.478H0V3.087ZM4.174,7.261V5.174H6.261V3.087h4.87L12.4,4.478h2.205A1.4,1.4,0,0,1,16,5.87v8.348a1.4,1.4,0,0,1-1.391,1.391H3.478a1.4,1.4,0,0,1-1.391-1.391V7.261Zm4.87,6.261a3.478,3.478,0,1,0-3.478-3.478A3.48,3.48,0,0,0,9.043,13.522ZM6.817,10.043A2.226,2.226,0,1,0,9.043,7.817a2.224,2.224,0,0,0-2.226,2.226Z"
          transform="translate(0 -1)"
          fill={color}
        />
      </Svg>
    );
  }
}

export default Photo;
