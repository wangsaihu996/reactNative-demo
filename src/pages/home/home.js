import React, { Component, PureComponent } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  RefreshControl,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  BackHandler,
  ToastAndroid,
  ImageBackground,
  DeviceEventEmitter,
  AsyncStorage,
  TouchableOpacity,
  Alert
} from 'react-native';

import styles from './homeStyleCss';
import Swiper from 'react-native-swiper';
import SearchBar from './SearchBar';
import GoodsItem from './GoodsItem';
import { Actions, utils } from '../../do';
// import TouchableOpacity from '../../components/TouchableOpacity';
import { sw } from '../../do/index';
import methods from '../../service/methods';
import NoDataView from '../../components/NodataView';
const { width, height } = Dimensions.get('window');


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    //当前页
    this.pageNum = 1;
    this.res;

    this.state = {
      bannerList: [
        {
          "bannerUrl": "https://kshop-dev-data.oss-cn-hangzhou.aliyuncs.com/kshop-dev-data_0e5f85e8f4b64ebc883c2624344106e9.png",
          "link": "",
          "linkType": null
        },
        {
          "bannerUrl": "https://kshop-dev-data.oss-cn-hangzhou.aliyuncs.com/kshop-dev-data_3a7e216d34c647ac97514313f4101130.png",
          "link": "",
          "linkType": null
        },
        {
          "bannerUrl": "https://kshop-dev-data.oss-cn-hangzhou.aliyuncs.com/kshop-dev-data_9d70ac5ac1ee481f8835e32e2f2e35a6.png",
          "link": "",
          "linkType": null
        }
      ],
      brandList: [
        {
          "brandCode": "020501",
          "brandName": "安热沙",
          "brandImgUrl": "https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kshop-pro-data_6f9c3ae75fc140188b5d775761a17ce1.png"
        },
        {
          "brandCode": "38",
          "brandName": "狮王",
          "brandImgUrl": "https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kshop-pro-data_903b35ac5f154775b52d093ee8994f1c.png"
        },
        {
          "brandCode": "30",
          "brandName": "凯伊秀",
          "brandImgUrl": "https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kshop-pro-data_0e618d1d25d54e76921129214ec21cca.png"
        },
        {
          "brandCode": "25",
          "brandName": "水之密语",
          "brandImgUrl": "https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kshop-pro-data_cd641883847f4041894d68036d940d2d.png"
        },
        {
          "brandCode": "454544",
          "brandName": "佰草集",
          "brandImgUrl": "https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kshop-pro-data_f74b8588b4014d4da2ec19dacaae7514.png"
        },
        {
          "brandCode": "XUANRUO",
          "brandName": "宣若",
          "brandImgUrl": "https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kshop-pro-data_3e6e9db7c9d741f5822b85220462f308.png"
        },
        {
          "brandCode": "31",
          "brandName": "Kiss you",
          "brandImgUrl": "https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kshop-pro-data_4d6e636485c24bc5a7e290c50741d757.png"
        },
        {
          "brandCode": "D30101",
          "brandName": "明色",
          "brandImgUrl": "https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kshop-pro-data_3784d6d0b36f41159b262a85195548b1.png"
        }
      ],
      manuSonTabIndex: 0,
      categoryList: [
        {
          "categoryCode": "TJ",
          "categoryName": "推荐"
        },
        {
          "categoryCode": "CZ",
          "categoryName": "彩妆"
        },
        {
          "categoryCode": "TF",
          "categoryName": "美发"
        },
        {
          "categoryCode": "MB",
          "categoryName": "护肤"
        },
        {
          "categoryCode": "KQ",
          "categoryName": "口腔"
        },
        {
          "categoryCode": "ST",
          "categoryName": "沐浴"
        }
      ],
      serachParmas: {
        categoryCode: "TJ",
        pageNum: 1,
        pageSize: 20,
        subChannelNo: "KMNG001"
      },
      // companyName: '',
      goodsList: [],
      refreshing: false,
    }

  }
  /***
   * 获取头部信息
   */
  getDataFromCloud() {
    let t = {
      subChannelNo: "KMNG001"
    }
    methods.homepageTopInfo(t)
      .then((res) => {

        this.setState({
          bannerList: res.bannerList,
          brandList: res.brandList,
          categoryList: res.categoryList,
          companyName: res.companyName
        })

      })
      .catch(err => {

      })
  }
  /***
   * 分类Tab切换
   * 
   */
  switchManu(code, index) {
    console.log("标签", code);
    this.setState({
      manuSonTabIndex: index,
      serachParmas: {
        categoryCode: code,
        pageNum: 1,
        pageSize: 20,
        subChannelNo: "KMNG001"
      }
    })
    this.state.serachParmas = {
      categoryCode: code,
      pageNum: 1,
      pageSize: 20,
      subChannelNo: "KMNG001"
    }
    this.getsearchGoodsData();
  }
  getsearchGoodsData() {
    methods.getsearchGoods(this.state.serachParmas)

      .then((res) => {

        this.setState({
          goodsList: res
        })
      })
      .catch(err => {

      })
  }
  goToGoodsList(code, name) {
    Actions.GoodsList({ "brandCode": code, "brandName": name })
  }
  /**
   * 生命周期函数
   */
  componentDidMount() {
    this.getsearchGoodsData();
    // this.getDataFromCloud();

  }
  /**
   * 模块渲染函数
   */
  // renderBrandItem = (item) => {
  //   return (
  //     <View style={styles.brandUL} >
  //       <Image
  //         source={{ uri: item.item.brandImgUrl }}
  //         resizeMode="stretch"
  //         style={styles.brandLiSon}
  //       />
  //     </View>
  //   )

  // }
  renderHeader() {
    let brandImgUL = this.state.brandList.map((item, index) => {
      return (
        <TouchableOpacity onPress={() => this.goToGoodsList(item.brandCode, item.brandName)}>
          <Image
            key={index}
            source={{ uri: item.brandImgUrl }}
            resizeMode="stretch"
            style={styles.brandLiSon}
          />
        </TouchableOpacity>
      )
    })
    return (
      <>
        <SearchBar />
        <View style={styles.bannerDiv}>
          <Swiper
            key={'bannerSwiper'}
            style={styles.bannerSwiper}
            autoplay={true}
            horizontal={true}
            dotStyle={{ width: 9.5, height: 4, backgroundColor: '#4A4D5F', opacity: .5, marginBottom: -10 }}
            activeDotStyle={{ width: 9.5, height: 4, backgroundColor: '#FFFFFF', marginBottom: -10 }}
            showsButtons={false}>
            {this.state.bannerList.map((item, index) => {
              return (
                <View>
                  <Image style={styles.swiperImageStyle} source={{ uri: item.bannerUrl }} resizeMode="stretch"></Image>
                </View>

              )
            })}

          </Swiper>
          <Image style={styles.bannerTitle} source={{ uri: 'https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kcng/home_xybz.png' }} resizeMode="stretch"></Image>
        </View>
        <View style={styles.prefectureDiv}>
          <Text style={styles.prefectureTitle}>内购品牌专区</Text>
        </View>
        <View style={styles.brandUL}>
          {brandImgUL}
        </View>

        <View style={styles.menuTabs}>
          {this.state.categoryList.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.manuSonTab} onPress={() => this.switchManu(item.categoryCode, index)}>
                <Text style={[styles.manuSonTabBar, index == this.state.manuSonTabIndex ? styles.manuSonTabBarActive : '']}>{item.categoryName}</Text>
                <Text style={[styles.manuSonTabIcon, index == this.state.manuSonTabIndex ? styles.manuSonTabIconActive : '']}></Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </>
    )
  }
  renderFooter() {
    return (
      <NoDataView title="真没了,已经到底了" />
    )
  }
  renderGoodsItem(item, index) {
    // console.log("DDDDD",item.item.length)
    return (
      <GoodsItem
        goodsitem={item.item}
        index={index}
      />
    )
  }
  _onRefresh() {
    this.setState({ refreshing: true })
    setTimeout(() => {
      this.setState({ refreshing: false })
    }, 1500)
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#FD0A37'} //状态栏背景颜色
          barStyle={'light-content'} //状态栏样式（黑字）
          translucent={false}
        />

        <Text style={styles.storeName}>鲲美内购</Text>
        <FlatList
          ListHeaderComponent={this.renderHeader()}
          ListFooterComponent={this.renderFooter()}
          numColumns={2}
          refreshing={this.state.refreshing}
          onRefresh={() => this._onRefresh()}
          data={this.state.goodsList}
          style={styles.goodsContentUl}
          renderItem={(item, index, separators) => this.renderGoodsItem(item, index)}
          keyExtractor={(item, index) => {
            return String(item.id) + index
          }}  //指定唯一id作为每一项的key,不要使用index，会在列表更改时都改变，消耗性能

        />

      </SafeAreaView>



    );
  }
}

