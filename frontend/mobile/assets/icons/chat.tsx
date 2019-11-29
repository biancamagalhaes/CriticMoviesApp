import React, { Component } from "react";
import { Svg, Path, Defs, G } from "react-native-svg";

class FingerPrint extends Component<{ color?: string }> {
  render() {
    return (
      <Svg width="140.464" height="42" viewBox="0 0 140.464 42">
        <Defs>
          <G transform="matrix(1, 0, 0, 1, 0, 0)">
            <Path
              id="União_1-2"
              data-name="União 1"
              d="M94-2964a8,8,0,0,1-8-8v-20a8,8,0,0,1,8-8H205.034q.222,0,.441.012l-.009-.012h15l-7.76,5.724a8,8,0,0,1,.328,2.276v20a8,8,0,0,1-8,8Z"
              transform="translate(-83 3002)"
              fill="#d6ebff"
            />
          </G>
        </Defs>
      </Svg>
    );
  }
}

export default FingerPrint;

{
  /*<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="140.464" height="42" viewBox="0 0 140.464 42">
  <defs>
    <filter id="União_1" x="0" y="0" width="140.464" height="42" filterUnits="userSpaceOnUse">
      <feOffset dy="1" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="1" result="blur"/>
      <feFlood flood-opacity="0.4"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#União_1)">
    <path id="União_1-2" data-name="União 1" d="M94-2964a8,8,0,0,1-8-8v-20a8,8,0,0,1,8-8H205.034q.222,0,.441.012l-.009-.012h15l-7.76,5.724a8,8,0,0,1,.328,2.276v20a8,8,0,0,1-8,8Z" transform="translate(-83 3002)" fill="#d6ebff"/>
  </g>
</svg>*/
}
