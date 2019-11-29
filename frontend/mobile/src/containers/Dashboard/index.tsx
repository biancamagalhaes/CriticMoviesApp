import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import {
  NavigationTransitionProps,
  NavigationScreenProps
} from "react-navigation";
import { verticalScale } from "utility";
import Header from "./Header";
import { connect } from "react-redux";
import { getOpList, actions, fetchListMovies } from "ducks/op";

export interface Props {
  fetchListMovies: (id?: string, clear?: boolean) => Promise<void>;
  clearOrders: () => void;
  clearItems: () => void;
  loading: boolean;
  movies: Array<{
    date;
    title;
    subtitle;
    url;
    linkText;
    image: { height; width; src };
    summary;
  }>;
}

class Items extends React.Component<
  NavigationScreenProps &
    NavigationTransitionProps & {
      routes: {
        imageRoute: string;
        pdfRoute: string;
        expeditionRoute: string;
      };
    } & Props
> {
  state = {
    endReached: true,
    refreshing: false,
    layout: { width: 420, height: 800 }
  };

  componentDidMount() {
    this.setState({ refreshing: !this.state.refreshing });
    this.props.fetchListMovies();
  }

  handleMomentumScrollBegin = () => this.setState({ endReached: false });

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#EBEBEB",
          borderStyle: "solid"
        }}
      />
    );
  };

  handleLoadMore = (value: any) => {
    if (!this.state.endReached) {
      this.setState({ endReached: true }, () => {
        this.props.fetchListMovies();
      });
    }
  };

  renderFooter = () => {
    if (!this.props.loading) return null;
    return <View style={{ alignSelf: "center", marginVertical: 20 }}></View>;
  };

  render() {
    const { navigation } = this.props;
    return (
      <View
        onLayout={(e: any) => this.setState({ layout: e.nativeEvent.layout })}
      >
        <Header />
        <FlatList
          data={this.props.movies && this.props.movies}
          keyExtractor={item => item.title}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <View style={{ margin: 1, flex: 0 }}>
                <TouchableOpacity
                  style={{ margin: verticalScale(1) }}
                  onPress={() =>
                    this.props.navigation.navigate("App/Dashboard/Item", {
                      item: item
                    })
                  }
                >
                  <View
                    style={{
                      borderColor: "#919191",
                      borderWidth: 1,
                      width: verticalScale(175),
                      height: verticalScale(175),
                      justifyContent: "center"
                    }}
                  >
                    <Image
                      style={{
                        width: item.image.width - 40,
                        height: item.image.height - 80,
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
                        color: "#919191",
                        fontSize: 15,
                        textAlign: "center",
                        alignSelf: "center",
                        marginVertical: 20
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
          refreshing={this.props.loading ? true : false}
          onRefresh={() => this.props.fetchListMovies()}
          ItemSeparatorComponent={this.renderSeparator}
          onEndReached={this.handleLoadMore}
          pagingEnabled={true}
          initialNumToRender={50}
          onEndReachedThreshold={0.5}
          onMomentumScrollBegin={() => this.handleMomentumScrollBegin()}
          ListFooterComponent={this.renderFooter}
          contentContainerStyle={{ flexGrow: 1 }}
          style={{ height: verticalScale(550) }}
        />
      </View>
    );
  }
}

export default connect(getOpList, (dispatch: any) => ({
  setLoading: (t: boolean) => dispatch(actions.setLoading(t)),
  fetchListMovies: (id: string, clear: boolean) => dispatch(fetchListMovies())
}))(Items);
