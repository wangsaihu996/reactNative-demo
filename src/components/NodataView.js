import React, { PureComponent, Component } from 'react';
import { sw } from '../utils/screenAdapter';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

export default class extends Component {
  render() {
    return <View style={styles.container}>
      {/* <Image style={styles.icon} source={require("../assets/no_data.png")} /> */}
      <Text style={styles.title}>{this.props.title || '暂无内容'}</Text>
    </View>
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: sw(12),
    marginBottom: sw(16),
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {

    width: sw(135),
    height: sw(75)
  },

  title: {
    marginTop: sw(5),
    fontSize: sw(14),
    textAlign: 'center',
    color: '#aaa'
  }
})
