export default {
    wxLogin: '/kshop-member-server/member/cloud/login/app/', // 微信登录
    phoneLogin: '/kshop-member-server/k2c/phone/login/', // 手机登录
    sendVerifyCode: '/kshop-member-server/k2c/phone/send/code/', // 手机登录发送验证码(支持登录和绑定手机)
    phoneBind: '/kshop-member-server/k2c/bind/phone/',  // 绑定手机
    bindPhoneSendCode: '/kshop-member-server/member/cloud/send/code/', // 发送绑定手机验证码
    getUserInfo: '/kshop-member-server/get/shopManagerInfo/inner/', // 获取用户信息
    findShopManagerInfoById: '/kshop-member-server/findShopManagerInfoById/',
    findShopManagerCommissionRecordList: '/kshop-member-server/findShopManagerCommissionRecordList/',// 收益记录列表
    homePageTopBanner: '/kshop-channel-server/cloudShop/homepage/topInfo/',// 自营好物头部banner
    getHWZYProdInfo: '/kshop-channel-server/cloudShop/homepage/prodInfo/', // 获取好物自营分类列表
    searchGoods: '/kshop-marketing-server/search/searchProducts/', // 搜索商品列表
    goodsDetail: '/kshop-marketing-server/product/detail/', // 商品详情页面 /kshop-channel-server/cloudShop/prod/detail/
    orderCommissionList: '/kshop-checkout-server/cloudShop/orderCommissionList/',// 我的销售单
    searchKeys: '/kshop-channel-server/product/search/keyword/list/',// 搜索商品关键字 废弃请使用keywordMatch
    getKmhProductShare: "/kshop-channel-server/channel/cloud/share/friend/", // 获取商品分享数据
    getKmhProductDetailShareImage: "/kshop-channel-server/channel/cloud/share/circle/",// 获取商品分享图
    myWallet: '/kshop-member-server/member/weWalletInfo/', //我的钱包
    withdrawRecord: '/kshop-member-server/member/transferRecord/',// 提现记录
    withdrawByWx: '/kshop-member-server/member/transferToUnit/',// 微信提现
    faceShare: '/kshop-marketing-server/k2c/face/share/',// 面对面分享
    discoveryListByType: '/kshop-channel-server/kmh/discovery/discoveryListByType/',// 达人说
    article: '/kshop-channel-server/kmh/discovery/article/', // 查看文章详情
    shareArticle: "/kshop-channel-server/kmh/discovery/shareArticle/",//分享文章
    articleClassifyMenus: '/kshop-channel-server/imageText/secondLevel/', // 文章分类菜单
    articleList: '/kshop-channel-server/imageText/getImageTextList/', // 获取文章列表
    productPlaybillList: "/kshop-channel-server/productPlaybill/list/",//商品海报列表
    productPlaybillDelete: "/kshop-channel-server/productPlaybill/delete/",// 商品海报删除接口
    productPlaybillSloganList: "/kshop-channel-server/productPlaybill/sloganList/",// 商品海报广告列表
    productPlaybillUpdate: "/kshop-channel-server/productPlaybill/update/",// 商品海报更新
    productPlaybillDetail: "/kshop-channel-server/productPlaybill/detail/",// 商品海报详情
    shareFriendInfo: "/kshop-marketing-server/k2c/wx/card/",//分享给朋友的接口
    shareTimelinePoster: "/kshop-channel-server/cloud/share/poster/",// 分享朋友圈接口
    findCommissionOrderList: '/kshop-marketing-server/findCommissionRecordList/', // 收益记录接口
    keywordMatch: "/kshop-marketing-server/search/keywordMatch/",// 关键字匹配
    homepageProductList: "/kshop-marketing-server/homepage/product/list/", //获取k2c首页商品信息
    superEarnWeekList: "/kshop-marketing-server/home/superEarnWeekList/",//本周超赚列表接口
    historySearch: "/kshop-marketing-server/search/historySearch/",// 历史搜索
    clearHistorySearch: "/kshop-marketing-server/search/clearHistorySearch/",//清理历史搜索
    searchProducts: "/kshop-marketing-server/search/searchProducts/",//搜索商品
    findCommissionOrderById: '/kshop-marketing-server/findMyCommission/', // 根据店长id查询收益接口
    shareUnitList: "/kshop-marketing-server/k2c/share/unit/list/",// 分享单元列表
    getPlayBillInfo: '/kshop-marketing-server/share/getPlayBillInfo/', //获取海报基础信息spi
    saveShareUnit: '/kshop-marketing-server/share/saveShareUnit/', //新增、编辑海报
    sloganList: '/kshop-marketing-server/share/sloganList/',//获取广告语列表
    deleteShareUnit: '/kshop-marketing-server/share/deleteShareUnit/', //删除分享单元

    specialAreaList: "/kshop-marketing-server/special/area/product/list/",
    addPosterShareCount: "/kshop-marketing-server/material/addShareCount/", // 记录海报分享数量
    commissionRankList: '/kshop-marketing-server/commission/rank/list/', // 收益排行榜
    withdrawCommission: '/kshop-marketing-server/withdrawCommission/', // 收益提现
    taobaoAmoy: "/kshop-marketing-server/k2c/taobao/amoy/",// 获取淘口令
    activityMaterialList: "/kshop-marketing-server/app/activity/material/list/",// 获取淘口令
    findWithdrawRecord: '/kshop-member-server/findWithdrawRecord/', // 提现记录
    getActivityPlaybill: "/kshop-marketing-server/activity/getActivityPlaybill/",// 获取活动海报信息
    getActivityPlaybillList: "/kshop-marketing-server/activity/getActivityPlaybillList/",// 获取活动海报列表
    getActivityCard: "/kshop-marketing-server/activity/getActivityCard/",// 获取活动卡片
    categoryList: '/kshop-channel-server/product/search/category/list/',//分类列表
    getInvitationState: '/kshop-member-server/k2c/invitation/getState/',// 获取邀请状态




    /***
     * mine
     */
    homeBanner: '/kshop-marketing-server/banner/list/', //首页banner
    homepageTopInfo: "/kshop-channel-server/kmng/homepage/top/",// 首页头部信息
    // 分类
    brandRecommendList: "/kshop-channel-server/product/search/brand/list/", // 品牌推荐列表
    searchGoods: "/kshop-channel-server/kmng/product/search/",//商品列表

}
