import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import {utils} from '../do/index';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <TouchableOpacity {...this.props} onPress={   
       ()=>{
        utils.shake(()=>{
            this.props.onPress &&this.props.onPress()
        },this) 
       }   
    }>{this.props.children}</TouchableOpacity>
    );
  }
}

