import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { verticalScale } from "utility";

export interface Props {
  name: string;
}

export default class HeaderDashboard extends React.Component<
  NavigationScreenProps & Props
> {
  render() {
    return (
      <View
        style={{
          flexGrow: 6,
          flex: 1,
          paddingTop: 30,
          paddingHorizontal: 20,
          backgroundColor: "#74118E",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          position: "relative"
        }}
      >
        <View style={{ position: "absolute", paddingLeft: 20 }}>
          <View style={{ position: "relative", paddingTop: 30 }}>
            <Text
              style={{
                marginTop: 50,
                fontSize: verticalScale(25),
                color: "#ffff",
                fontWeight: "bold",
                fontFamily: "Sans-SemiBold"
              }}
            >
              Lista dos Filmes
            </Text>
          </View>
        </View>
        <View style={{ position: "relative", flex: 1 }}>
          <Image
            source={require("assets/icons/fav_icon.png")}
            style={{
              justifyContent: "center",
              alignSelf: "flex-end",
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              resizeMode: "contain"
            }}
          />
          <View
            style={{
              position: "absolute",
              flex: 1,
              alignSelf: "flex-end",
              marginTop: 20
            }}
          >
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("App/Dashboard/Logout")
              }
            >
              <Text
                style={{
                  color: "#ffff",
                  fontWeight: "bold",
                  fontSize: verticalScale(15),
                  fontFamily: "Sans-SemiBold"
                }}
              >
                NEW YORK TIMES
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
