/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
    View,
} from 'react-native';

import ControlPanel from './js/ControlPanel';
import MainApp2 from './js/MainApp2';


export default class Testing extends Component {

  render() {
    return (
        <MainApp2 />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 2,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     justifyContent: 'space-between',
//     // alignSelf: 'stretch',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

//js.coach

AppRegistry.registerComponent('Testing', () => Testing);
