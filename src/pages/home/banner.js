import Swiper from 'react-native-swiper'
import React, { Component } from 'react';
import { sw } from '../../utils/screenAdapter';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    URL
} from 'react-native';
import Share from '../../utils/share';
import {Actions} from 'react-native-router-flux'
import {parseQuerys,getSceneKeyByPath} from '../../utils/index';


export default class Banner extends Component {
    renderList(){
        let list = []
       for(let item of this.props.list){
           list.push(
               (<><TouchableOpacity activeOpacity={0.9} style={{flex:1}} onPress={()=>{
                this.onPressBanner(item)
            }}>
                <Image style={styles.bannerImage} source={{ uri: item.bannerUrl }} resizeMode="stretch"></Image>
            </TouchableOpacity></>)
           )
       }
        return list
    }
    onPressBanner=(item)=>{
        if(item.linkType==4){
          let sceneKey =   getSceneKeyByPath(item.link)
          let querys = parseQuerys(item.link)
          Actions.push(sceneKey,querys)
        }else{
            Share.launchMini({path:item.link?item.link:''})
        }
    }

    render() {
        let dot = <View style={styles.dot}></View>
        let activeDot = <View style={styles.activeDot}></View>
        return (
            <View style={styles.banner} >
                <Swiper dot={dot} activeDot={activeDot} horizontal={true} removeClippedSubviews={false}>
                    {this.renderList()}
                </Swiper>
            </View>
        );
    }
    
}
let styles = StyleSheet.create({
    banner: {
        width: sw(375),
        height: '100%',
        backgroundColor: '#fefefe',

    },
    bannerImage: {
        width: sw(355),
        height: sw(180)
    },
    dot: {
        width: 10,
        height: 2,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        marginLeft: 3,
        marginRight: 3
    },
    activeDot: {
        width: 10,
        height: 2,
        backgroundColor: '#D80B2A',
        borderRadius: 2,
        marginLeft: 3,
        marginRight: 3
    }

})

