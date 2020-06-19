
import RNFetchBlob from 'rn-fetch-blob';
import CameraRoll from "@react-native-community/cameraroll";
import * as WeChat from 'react-native-wechat';
import { Toast } from 'native-base';
WeChat.registerApp('wxcdab02a726a1a3bc');


// 下载文件
const downloadFile = (url)=>{
  return new Promise((resolve,reject)=>{
    RNFetchBlob
    .config({
        // add this option that makes response data to be stored as a file,
        // this is much more performant.
        fileCache: true,
    })
    .fetch('GET', url, {
        //some headers ..
    })
    .then((res) => {
        resolve(res.path())
    }).catch(reject)
  })
}


// 是否安装微信
const isInstallWx = (url)=>{
  return new Promise((resolve,reject)=>{
    WeChat.isWXAppInstalled().then((isInstalled) => {
        if (isInstalled) {
            resolve()
        }else{
            Toast.show({
                text: '您没有安装微信客户端,请安装后尝试',
                type:'warning',
                position:'top'
            })
            reject()
        }
    })
  })
}

// 保存本地
const saveLocal = (url) => {
    return new Promise((resolve, reject) => {
        if (!url) {
            alert("请传参数url")
        }
            downloadFile(url).then(path=>{
                CameraRoll.saveToCameraRoll(path)
                resolve()
            })
    })
}


// 分享图片给朋友
const  shareImageToFriend = ({url}) => {
    if(!url){
        alert("请填写分享的url地址")
        return
    }
    return new Promise((resolve, reject) => {
        if (!url) {
            alert("请传参数url")
        }
        isInstallWx().then((res)=>{
            downloadFile(url).then(path=>{
                WeChat.shareToSession({
                    type: 'imageFile',
                    title: '',
                    description: '',
                    mediaTagName: '',
                    messageAction: undefined,
                    messageExt: undefined,
                    imageUrl: 'file://'+ path// require the prefix on both iOS and Android platform
                  }).then((error)=>{
                      resolve()
                  });
            }).catch(reject)
        })
  })
}


// 分享朋友圈
const shareImageToTimeline = ({url}) => {
    if(!url){
        alert("请填写分享的url地址")
        return
    }
    return new Promise((resolve, reject) => {
        if (!url) {
            alert("请传参数url")
        }
        isInstallWx().then((res)=>{
            downloadFile(url).then(path=>{
                WeChat.shareToTimeline({
                    type: 'imageFile',
                    title: '',
                    description: '',
                    mediaTagName: '',
                    messageAction: undefined,
                    messageExt: undefined,
                    imageUrl: 'file://'+ path// require the prefix on both iOS and Android platform
                  }).then((error)=>{
                      resolve()
                  });
            }).catch(reject)
        })
    })
}

// 分享小程序
const shareMiniProgram = ({url,path,title,thumbImage}) => {
    return new Promise((resolve,reject)=>{
        isInstallWx().then((res)=>{
            WeChat.shareToSession({
                type: 'mini',
                title: title,
                thumbImage: thumbImage,
                description: "",
                webpageUrl: "https://www.baidu.com",
                userName: 'gh_9be32defe1eb',//小程序原始ID
                path: path,  //小程序页面路径
                miniProgramType: 0, //0-发布，1-开发，2-测试。好像是这个，不是很确定
                withShareTicket: false,
            }).then((res)=>{
                resolve(res)
            }).catch((clickErr)=>{
               reject(clickErr)
            })
        })
    })
}

// 拉起小程序
const launchMini = ({path})=>{
   WeChat.launchMini({
    userName:'gh_9be32defe1eb',
    miniProgramType:0,// {Integer} 拉起小程序的类型. 0-正式版 1-开发版 2-体验版
    path:path
   })
}

export default {
    saveLocal,
    shareImageToFriend,
    shareImageToTimeline,
    shareMiniProgram,
    launchMini
}