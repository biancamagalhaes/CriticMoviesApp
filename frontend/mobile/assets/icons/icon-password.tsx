import React, { Component } from "react";
import { Svg, Path, G } from "react-native-svg";
import {verticalScale} from "utility"

class Password extends Component<{ color?: string }> {
  render() {
    return (
      <Svg
        width={verticalScale(20)} height={verticalScale(20)}
        viewBox="0 0 12.57 16.234"
        style={{ marginTop: -5, marginRight: 5 }}
      >
        <G
          id="Grupo_136"
          data-name="Grupo 136"
          transform="translate(-344.326 -331.463)"
        >
          <Path
            id="Caminho_2473"
            data-name="Caminho 2473"
            d="M356.646,383.5v-6.118a1.825,1.825,0,0,0-1.468-1.787l-.082-.016h-8.944l-.108.016a1.825,1.825,0,0,0-1.468,1.787V383.5a1.823,1.823,0,0,0,1.821,1.821h8.429A1.823,1.823,0,0,0,356.646,383.5Zm-.547,0a1.275,1.275,0,0,1-1.274,1.274H346.4a1.276,1.276,0,0,1-1.274-1.274v-6.118a1.277,1.277,0,0,1,1.027-1.251l.03-.006h8.864l.029.006a1.277,1.277,0,0,1,1.027,1.251Z"
            transform="translate(0 -37.869)"
            stroke="#000"
            stroke-width="0.5"
          />
          <Path
            id="Caminho_2474"
            data-name="Caminho 2474"
            d="M365.4,337.141V336.1a4.39,4.39,0,0,0-8.78,0v1.038h.547V336.1a3.844,3.844,0,0,1,7.687,0v1.038Z"
            transform="translate(-10.397 0)"
            stroke="#000"
            stroke-width="0.5"
          />
          <Path
            id="Caminho_2475"
            data-name="Caminho 2475"
            d="M375.952,394.148,374,396.1l-1.947-1.947-.386.386,1.947,1.947-1.947,1.947.386.386L374,396.868l1.947,1.947.386-.386-1.947-1.947,1.947-1.947Z"
            transform="translate(-23.394 -53.905)"
            stroke="#000"
            stroke-width="0.5"
          />
        </G>
      </Svg>
    );
  }
}

export default Password;
