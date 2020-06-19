import React, { Component,PureComponent } from 'react';
import {Dimensions,Image} from 'react-native';
import  FastImage from 'react-native-fast-image';
// import { createImageProgress } from 'react-native-image-progress';
// const Image = createImageProgress(FastImage);


/*
 * 高度自适应的图片组件
 * width - 设置宽度
 */
export default class FitImage extends PureComponent{
   state = {
       width:Dimensions.get('window').width,
       height:10,
       show:false
   }
   constructor(){
       super(...arguments)
       if(this.props.width){
        this.state.width = this.props.width
       }
   }
   componentDidMount(){
      if(this.props.source.uri){
         this.resetHeight(this.props.source.uri)
      } 
   }

   render(){
       return (this.state.show?<FastImage source={this.props.source} style={{...this.props.style,height:this.state.height}} priority="high" resizeMode="contain"></FastImage>:null)
   }
   resetHeight(url){
    let screenWidth = this.props.style.width || Dimensions.get('window').width
       Image.getSize(url,(width,height)=>{
          console.log(width,height)
          let h = Math.floor(1.0 * screenWidth / width * height)
          this.setState({
             height:h,
             show:true
          })
       })
   }
   resetSize(width,height){
    let screenWidth = this.props.style.width || Dimensions.get('window').width
    let h = Math.floor(1.0 * screenWidth / width * height)
          this.setState({
             height:h
          })
   }
}
