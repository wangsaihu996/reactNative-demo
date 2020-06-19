import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    scrollView,
    ImageBackground,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { sw } from '../../do';
import { Item } from 'native-base';
import methods from '../../service/methods';
import {Actions,utils} from '../../do/index'

export default class GoodsItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          
        }

    }
    //跳转商品详情页
    goToGoodsDetails(code){
        console.log("商品编码===",code)
        Actions.GoodsDetails({'goodsCodeKey':code})
    }
    /**
     * 生命周期
     */
    componentDidMount() {
        

    }

    render() {
        let item = this.props.goodsitem;    
        return (
            <>
                <TouchableOpacity style={styles.goodsLi} onPress={()=>this.goToGoodsDetails(item.prodCode)}>
                    <Image
                        source={{ uri: item.mainImageUrl }}
                        resizeMode="stretch"
                        style={styles.goodsImg}
                    />
                    <View style={styles.brandAndCountry}>
                        <Text style={styles.brandNameText}>{item.brandName}</Text>
                        <View style={styles.countryDiv}>
                            <Image
                                source={{ uri: item.countryFlag }}
                                resizeMode="stretch"
                                style={styles.countyrImg}
                            />
                            <Text>{item.countryName}</Text>
                        </View>
                    </View>
                    <Text numberOfLines={2} style={styles.prodNameText}>{item.prodName}</Text>
                    <View style={styles.goodsTips}>
                        <Text style={styles.goodsTipItem}>{item.discountStr}折</Text>
                        <Text style={styles.goodsTipItem}>满{item.freeShipLimit}包邮</Text>
                        <Text style={[styles.goodsTipItem, styles.goodsTipItemLast]}>国际品牌</Text>
                    </View>
                    <View style={styles.priceView}>
                        <Text style={styles.priceTextTip}>内购价</Text>
                        <Text style={styles.rmbIcon}>¥</Text>
                        <Text style={styles.realPriceText}>{item.realPrice}</Text>
                        <Text style={styles.linePriceText}>¥{item.linePrice}</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

}

const styles = StyleSheet.create({

    
    //////商品列表样式//////
    goodsContentUl: {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        // flexWrap: 'wrap',
        paddingHorizontal: sw(7),
        marginVertical: sw(5),
        backgroundColor: '#F5F5F5'
    },

    goodsLi: {
        width: sw(172),
        height: sw(315),
        borderRadius: 10,
        backgroundColor: "#fff",
        marginBottom: sw(5),
        marginHorizontal: sw(4)
    },
    brandAndCountry: {
        width: sw(172),
        // height: sw(20),
        paddingHorizontal: sw(10),
        paddingVertical: sw(6),
        backgroundColor: "#fff",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    brandNameText: {
        borderRadius: 3,
        paddingHorizontal: sw(5),
        backgroundColor: 'rgba(136, 163, 192, 1)',
        color: "#fff"
    },
    goodsImg: {
        width: sw(172),
        height: sw(185),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    countryDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    countyrImg: {
        width: sw(17),
        height: sw(17),
        borderRadius: 300,
        marginRight: sw(5)
    },
    prodNameText: {
        paddingHorizontal: sw(10),
    },
    goodsTips: {
        paddingHorizontal: sw(10),
        paddingTop: sw(5),
        backgroundColor: "#fff",
        display: 'flex',
        flexDirection: 'row',
    },
    goodsTipItem: {
        fontSize: 10,
        color: '#FE3F42',
        paddingTop: sw(1),
        paddingLeft: sw(4),
        paddingRight: sw(2),
        backgroundColor: '#FFEDED',
        marginRight: sw(5),
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#FE3F42'
    },
    goodsTipItemLast: {
        borderColor: '#79A7C8',
        color: '#83A6C5',
        backgroundColor: '#EFF7FF'
    },
    priceView: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: sw(10)
    },
    priceTextTip: {
        fontSize: 10,
        color: "#999",
        marginTop: sw(10)
    },
    rmbIcon: {
        fontSize: 10,
        color: "#FF4142",
        marginTop: sw(10)
    },
    realPriceText: {
        fontSize: 22,
        color: "#FF4142",
    },
    linePriceText: {
        fontSize: 10,
        color: "#999",
        marginTop: sw(10),
        marginLeft: sw(5),
        textDecorationLine: 'line-through'

    }
})
