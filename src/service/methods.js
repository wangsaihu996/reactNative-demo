import { post, AuthPost, AuthGet, get, AuthPhonePost } from './request'
import Api from './api';
import config from '../config/config';
/**
 * 登录发送验证码
 * @param {*}
 *
 * @return
 */
//分类--品牌推荐列表
export let getbrandList = (params) => {
    return post(Api.brandRecommendList, params)
}
// 首页头部信息
export const homepageTopInfo = (params = {}) => {
    return AuthPost(Api.homepageTopInfo, params)
}


export const getsearchGoods = (params = {}) => {
    return AuthPost(Api.searchGoods, params)
}

export default {
    homepageTopInfo,
    getbrandList, //分类--品牌推荐列表
    getsearchGoods
}