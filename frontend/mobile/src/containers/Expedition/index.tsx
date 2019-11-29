import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  NavigationTransitionProps,
  NavigationScreenProps
} from "react-navigation";
import Header from "./Header";

export interface Props {
  fetchOpProduction: () => Promise<void>;
  setEndItem: (id: string, prorID: string) => Promise<void>;
  setNewItem: (
    formData: { OritID: string; Qty: number },
    id: string
  ) => Promise<any>;
  fetchOpItem: (id: string, prorID: string) => Promise<void>;
  fetchIdOpenItem: (id: string, prorID: string) => Promise<void>;
  fetchListItems: (prorID: string, b: boolean) => Promise<void>;
  clearItem: (id: string) => Promise<void>;
  images: Array<string>;
  description: string;
  oritID: string;
  urlPdf: string;
}

class Expedition extends React.Component<
  NavigationScreenProps &
    NavigationTransitionProps & {
      routes: {
        imageRoute: string;
        pdfRoute: string;
        expeditionRoute: string;
        alertRoute: string;
      };
    } & Props
> {
  state = {
    layout: { width: 300, height: 200 },
    showModal: false,
    stop: false
  };

  render() {
    const { navigation } = this.props;
    const { showModal } = this.state;
    const item = this.props.navigation.getParam("item");

    return (
      <React.Fragment>
        <Header />
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "stretch"
          }}
        >
          <View
            style={{
              padding: 20,
              paddingVertical: 10,
              paddingBottom: 5,
              flex: 1.6,
              justifyContent: "space-evenly"
            }}
          >
            <Image
              style={{
                width: item.image.width + 200,
                height: item.image.height,
                flex: 1,
                alignSelf: "center",
                marginTop: 10
              }}
              source={{
                uri: item.image.src
              }}
            />
            <Text
              style={{
                fontSize: 30,
                alignSelf: "center",
                textAlign: "center",
                marginTop: 20
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 20,
                alignSelf: "center",
                textAlign: "center",
                marginBottom: 20
              }}
            >
              {item.subtitle}
            </Text>
            <Text
              style={{
                fontSize: 15,
                alignSelf: "center",
                textAlign: "justify",
                marginHorizontal: 15
              }}
            >
              Summary: {item.summary}
            </Text>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("App/Dashboard/Link", {
                  link: item.url
                })
              }
            >
              <Text
                style={{
                  fontSize: 25,
                  alignSelf: "center",
                  textAlign: "justify",
                  marginTop: 25,
                  marginBottom: 25,
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                VEJA O ARTIGO AQUI
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
export default Expedition;
