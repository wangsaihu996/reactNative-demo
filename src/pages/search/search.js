import React from 'react';
import { View, Text,StyleSheet,Image,SafeAreaView,Platform,StatusBar,TouchableOpacity} from 'react-native';
import { sw} from '../../utils/screenAdapter';
import {Actions,utils} from '../../do/index'

export default class detailsScreen extends React.Component {


    render() {
        return (
            <>
                <StatusBar backgroundColor={'#FD0A37'} //状态栏背景颜色
                    barStyle={'light-content'} //状态栏样式（黑字）
                    translucent={false}
                />
                <SafeAreaView>

                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.searchBar}
                            // onPress={() => {
                            //     Actions.push("Search");
                            // }} activeOpacity={0.5}
                        >
                            <Image style={styles.searchBarIcon} source={require('../../assets/search.png')}></Image>
                            <Text style={styles.searchBarTitle}>请输入搜索关键词</Text>
                            
                        </TouchableOpacity>
                        <Text style={styles.searchBarBtn}>搜索</Text>        

                    </View>
                </SafeAreaView>

            </>
        );
    }
}



const styles = StyleSheet.create({

    header: {
        marginVertical:sw(16),
        width: sw(375),
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    searchBar: {
        marginLeft: sw(12.5),
        width: sw(300),
        height: sw(38),
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
        fontSize: 14,
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
        marginTop: 2,
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: 'bold',
    },
    searchBarBtn: {
        marginLeft: sw(10),
        fontSize: 14
    }
})
