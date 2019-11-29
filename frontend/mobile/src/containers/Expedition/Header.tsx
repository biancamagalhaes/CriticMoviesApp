import React from "react";
import { View } from "react-native";
import { withNavigation } from "react-navigation";

import HeaderDashboard from "components/Header/HeaderDashboard";

const Header = ({ navigation, user: { name = "" } = { name: "" } }) => (
  <View style={{ height: "20%" }}>
    <HeaderDashboard navigation={navigation} name={name} />
  </View>
);

export default withNavigation(Header);
