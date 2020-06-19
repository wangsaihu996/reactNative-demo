import React, { Component } from "react";

import { Image, FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},],
    };
  }
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    const onPressRightButtonFunc = params.openPublisher || function () { }
    return {
      title: '首页',
    }
  }
  render() {
    return (
      <FlatList
        data={this.state.data}
        style={styles.list}
        renderItem={this.renderMovie.bind(this)}
        keyExtractor={item => item.id}
      />
    );
  }

  renderMovie({ item }) {
    const navigate = this.props.navigation;
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigate.navigate('Details')} >
        <View style={styles.container}> 
          <Image
            source={{ uri: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=e4d6ea2325dda3cc0be4bf2639d25e3c/b64543a98226cffcb1f7cc0eb2014a90f703eaa9.jpg' }}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <View style={styles.titleWithout}>
              <Text style={styles.title}>罗小黑战记</Text>
              <Text style={styles.tip}>中国巨屏</Text>
            </View>
            <Text style={styles.score}>猫眼评分<Text style={styles.grade}> 9.8 </Text></Text>
            <Text style={styles.starring}>主演:罗小黑，罗小白</Text>
            <Text style={styles.cinema}>今天129加音乐反映124场</Text>
          </View>
          <Text style={styles.buy}>购买</Text>
        </View>
      </TouchableOpacity>

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  header: {
    height: 20,
    marginTop: 44,
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 18,
  },
  titleWithout: {
    flexDirection: "row",
    fontWeight: "bold",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    marginTop: 4,
    lineHeight: 0,
  },
  tip: {
    backgroundColor: "#999",
    fontSize: 8,
    textAlign: "center",
    color: "#fff",
    height: 14,
    width: 40,
    lineHeight: 14,
    borderRadius: 2,
    marginLeft: 4,
    marginTop: 4,
  },
  score: {
    paddingTop: 8,
    fontSize: 12,
    color: "#666",
  },
  starring: {
    paddingTop: 4,
    fontSize: 12,
    color: "#666",
  },
  cinema: {
    paddingTop: 4,
    fontSize: 12,
    color: "#666",
  },
  buy: {
    fontSize: 12,
    // color:'#333',
    width: 46,
    height: 24,
    lineHeight: 24,
    textAlign: "center",
    backgroundColor: "#D44145",
    color: "#fff",
    borderRadius: 12,
    marginRight: 20,

  },
  grade: {
    color: "#DF8D7A",
  },
  year: {
    textAlign: "center"
  },
  thumbnail: {
    width: 68,
    height: 94,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,

  },
  list: {
    backgroundColor: "#F5FCFF"
  },
  headerOutline: {
    backgroundColor: "#fff",
    marginTop: 44,
  },
  headerInside: {
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 6,
    paddingTop: 10,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  trendIcon: {
    width: 10,
    height: 14,
    marginLeft: 10,
    marginTop: -1,
  },
  trendText: {
    height: 22,
    color: '#333',
    fontWeight: "bold",
  },
  trendR: {
    color: '#333',
    fontSize: 10,
    fontWeight: "bold",
    height: 22,
  },
  trendRText: {

  },
  trendMoney: {
    color: '#D24349',
  },
});