import React, { Component } from "react";

import { Image, FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Router, Stack, Scene, Tabs, Modal } from 'react-native-router-flux'
import Home from './src/pages/home/home'
import Mine from './src/pages/mine/mine'
import Classify from './src/pages/classify/classify'
import ShopCart from './src/pages/shopCart/shopCart'

import Search from './src/pages/search/search'
import GoodsDetails from './src/pages/goodsDetails/goodsDetails'
import GoodsList from './src/pages/goodsList/goodsList'


// const TabIcon = ({focused , title}) => {
//   console.log("输出",focused , title)
//   return (
//     <Text style={{color: focused  ? 'blue' : 'black'}}>{title}</Text>
//   );
// };
const TabIcon = ({ focused, title, key }) => {

  let list = {
    '首页': {
      icon: require('./src/assets/home.png'),
      activeIcon: require('./src/assets/home_active.png')
    },
    '分类': {
      icon: require('./src/assets/classify.png'),
      activeIcon: require('./src/assets/classify_active.png')
    },
    '购物车': {
      icon: require('./src/assets/cart.png'),
      activeIcon: require('./src/assets/cart_active.png')
    },
    '我的': {
      icon: require('./src/assets/mine.png'),
      activeIcon: require('./src/assets/mine_active.png')
    }

  }
  let item = list[title]
  if (!focused) {
    return (
      <View style={{ alignItems: 'center' }}>

        <Image style={{ width: 24, height: 24 }} source={item.icon} resizeMode="contain" />
        <Text style={{ fontSize: 10, color: '#999999', fontWeight: 'bold' }}>{title}</Text>
      </View>

    );
  } else {
    return (
      <View style={{ alignItems: 'center' }}>
        <Image style={{ width: 24, height: 24 }} source={item.activeIcon} resizeMode="contain" />
        <Text style={{ fontSize: 10, color: '#FD0035', fontWeight: 'bold' }}>{title}</Text>
      </View>


    );

  }
}






const App = () => {
  return (
    <Router sceneStyle={{ backgroundColor: 'white' }}>
      <Stack key="root">
        {/* 配置路由规则 */}
        {/* 注意，所有的路由规则，都应该写到这个位置 */}
        {/* 第一个 Scene 就是默认要展示的首页 */}
        {/* key 属性，表示路由的规则名称，将来可以使用这个 key ，进行编程式导航，每一个路由规则，都应该提供一个 唯一的key， key不能重复 */}
        {/* <Scene key="app" component={App} title="" hideNavBar={true} /> */}
        {/* 电影列表的路由规则 */}

        <Tabs key="tabbar" activeTintColor='#FD0035' showLabel={false} hideNavBar>
          <Scene key="Home" component={Home} title="首页" icon={TabIcon} hideNavBar />
          <Scene key="Classify" component={Classify} title="分类" icon={TabIcon} navigationBarStyle={styles.navigationBarActiveStyle} hideNavBar />
          <Scene key="ShopCart" component={ShopCart} title="购物车" icon={TabIcon} hideNavBar />
          <Scene key="Mine" component={Mine} title="我的" icon={TabIcon} hideNavBar />
        </Tabs>
        
        <Scene key="Search" component={Search} title="搜索" navBarButtonColor="black" />
        <Scene key="GoodsDetails" component={GoodsDetails} title="商品详情" navBarButtonColor="black" />
        <Scene key="GoodsList" component={GoodsList} title="商品列表" navBarButtonColor="black" />
      </Stack>
    </Router>
  )
}



const styles = StyleSheet.create({
  navigationBarStyle: {
    borderBottomWidth: 0
  },
  navigationBarActiveStyle: {
    borderBottomWidth: 0,
    backgroundColor: '#FD0035',
    color: 'white'
  },
  titleStyle: {
    color: 'white',
  },
  tabBar: {
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    fontSize: 12
  }
})



export default App;