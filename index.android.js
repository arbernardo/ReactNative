/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
    View,
} from 'react-native';

import MainApp from './js/MainApp';
import MainApp2 from './js/MainApp2';


export default class Testing extends Component {

  render() {
    return (
        <MainApp2 />
    );
  }
}

AppRegistry.registerComponent('Testing', () => Testing);
