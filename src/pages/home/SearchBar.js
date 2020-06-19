import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,SafeAreaView,Platform,StatusBar,TouchableOpacity} from 'react-native';
import { sw} from '../../utils/screenAdapter';
import {Actions,utils} from '../../do/index'
// import TouchableOpacity from '../../components/TouchableOpacity';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }

  componentDidMount(){
  
  }

  render() {
    return (
        <SafeAreaView>
         
        <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.searchBar}
                        onPress={() => {
                            Actions.push("Search");
                        }} activeOpacity={0.5}
                        >
                        <Image style={styles.searchBarIcon} source={require('../../assets/search.png')}></Image>
                        <Text style={styles.searchBarTitle}>企业内购，限时折扣</Text>
                    </TouchableOpacity>
                    
                    {/* <TouchableOpacity
                        style={styles.classifyBtn}
                        activeOpacity={0.5}
                        onPress={() => {
                            Actions.push("ClassifyRootView", {

                            })
                        }}>
                        <Image style={styles.classifyIcon} source={require('../../assets/classify.png')} />
                        <Text style={styles.classifyTitle}>分类</Text>
                    </TouchableOpacity> */}
                </View>
                </SafeAreaView>

    );
  }
}

export default SearchBar;


/***
 * 樣式
 */
const styles = StyleSheet.create({
  
    header: {
        position:"absolute",
        paddingTop:Platform.OS==='ios'? 50:0,
        top:Platform.OS==='ios'?-50:0,
        height: sw(46)+(Platform.OS==='ios'?50:0),
        width: sw(375),
        alignItems: 'center',
        backgroundColor:'#FD0035',
        flexDirection: 'row',
    },
    searchBar: {
        marginLeft:sw(12.5),
        width: sw(350),
        height: sw(35),
        backgroundColor: '#F6f6f6',
        borderRadius: sw(20),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchBarIcon: {
        width: sw(18),
        height: sw(18),
        marginLeft: sw(12),
    },
    searchBarTitle: {
        color: '#A3A3A3',
        fontSize:14,
        marginLeft: sw(8.5),
    },
    classifyBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 7.5,
        marginLeft: sw(15),
    },
    classifyIcon: {
        width: sw(21),
        height: sw(21),
    },
    classifyTitle: {
        marginTop:2,
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: 'bold',
    },
})


