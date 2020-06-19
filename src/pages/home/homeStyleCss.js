import {
  Dimensions,
} from 'react-native';
import { sw, sh, st } from '../../utils/screenAdapter';

const { width, height } = Dimensions.get('window');
export default {
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  storeName: {
    height: sw(44),
    lineHeight: sw(36),
    color: '#fff',
    backgroundColor: '#FD0A37',
    fontSize: sw(16),
    textAlign: "center",
    paddingBottom: sw(16)
  },
  bannerDiv: {
    paddingLeft: sw(12),
    backgroundColor: '#FD0A37',
    marginTop: sw(46) + (Platform.OS === 'ios' ? 50 : 0)
  },
  bannerSwiper: {
    height: sw(130),
    marginTop:sw(6)
  },
  swiperImageStyle: {
    width: sw(350),
    height: sw(130),
    borderRadius: sw(8)
  },
  bannerTitle: {
    width: sw(351),
    height: sw(14),
    marginVertical: sw(10)
  },
  prefectureDiv: {
    backgroundColor: "#FD0A37",

    display: "flex"
  },
  prefectureTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: sw(17),
    borderTopRightRadius: sw(17),
    paddingVertical: sw(15),
  },
  //内购品牌专区
  brandUL: {
    paddingHorizontal: sw(7),
    paddingBottom: sw(10),
    backgroundColor: '#F5F5F5',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  brandLiSon: {
    width: sw(90),
    height: sw(105),
  },
  //分类Tab切换部分
  menuTabs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    paddingHorizontal: sw(6),
    paddingVertical: sw(10),
    backgroundColor: '#F5F5F5'
  },
  manuSonTab: {
    width: sw(36),
    height: sw(32),
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#f99"

  },

  manuSonTabBar: {
    fontSize: 14,
    color: '#999'
  },
  manuSonTabBarActive: {
    fontSize: 15,
    color: '#000'
  },
  manuSonTabIcon: {
    width: sw(16),
    height: sw(3),
    borderRadius: 3,
    marginTop: sw(2),
    backgroundColor: '#F5F5F5',

  },
  manuSonTabIconActive: {
    backgroundColor: '#f00'
  }

}
