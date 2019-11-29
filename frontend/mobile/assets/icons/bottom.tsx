import React, { Component } from "react";
import {View} from "react-native";
import { Svg, Path } from "react-native-svg";

class Bottom extends Component<{ color?: string }> {
    state = {layout: {width: 300, height: 200}}
  render() {
    return (
        <View style={{flex: 1, position: 'relative'}}>
            <View style={{position: 'absolute', left:0, right:0, top:0, bottom:0}} onLayout={(e:any) => this.setState({layout: e.nativeEvent.layout})}>
                <Svg width={this.state.layout.width} height={this.state.layout.height}>
                    <Path
                    d={`M ${this.state.layout.width} ${this.state.layout.height} L 0 ${this.state.layout.height} L 0 0 C 40.541 10.781 111.192 17.218 189.007 17.218 C 266.026 17.218 336.306 10.88 ${this.state.layout.width} 0.265 L ${this.state.layout.width} 175.747 L ${this.state.layout.width} ${this.state.layout.height} Z`} fill="#015492"
                    />
                </Svg>
            </View>
            <View style={{alignContent: "center", justifyContent: "center", paddingVertical: "5%"}}>
                {this.props.children}
            </View>
        </View>
    );
  }
}

export default Bottom;
