import React, { Component } from "react";
import { Svg, Path, G } from "react-native-svg";
import {verticalScale} from "utility";

class Account extends Component<{ color?: string }> {
  render() {
    return (
      <Svg
      width={verticalScale(20)} height={verticalScale(20)}
        viewBox="0 0 13.248 15.299"
        style={{ marginTop: -5, marginRight: 5 }}
      >
        <G
          id="Grupo_135"
          data-name="Grupo 135"
          transform="translate(-381.169 -281.082)"
        >
          <Path
            id="Caminho_2470"
            data-name="Caminho 2470"
            d="M426.95,285.7a4.473,4.473,0,1,0-4.473,4.473A4.478,4.478,0,0,0,426.95,285.7Zm-4.473,3.674a3.674,3.674,0,1,1,3.674-3.674A3.678,3.678,0,0,1,422.478,289.378Z"
            transform="translate(-34.685)"
            stroke="#252425"
          />
          <Path
            id="Caminho_2471"
            data-name="Caminho 2471"
            d="M385.129,447.88a.4.4,0,0,0-.525-.21,4.879,4.879,0,0,0-3.286,4.276v1.215a.4.4,0,0,0,.8,0v-1.215a4.1,4.1,0,0,1,2.8-3.541A.4.4,0,0,0,385.129,447.88Z"
            transform="translate(0 -157.328)"
            stroke="#252425"
          />
          <Path
            id="Caminho_2472"
            data-name="Caminho 2472"
            d="M548.787,447.664a.4.4,0,0,0-.314.735,4.1,4.1,0,0,1,2.8,3.541v1.215a.4.4,0,1,0,.8,0V451.94A4.879,4.879,0,0,0,548.787,447.664Z"
            transform="translate(-157.806 -157.323)"
            stroke="#252425"
          />
        </G>
      </Svg>
    );
  }
}

export default Account;
