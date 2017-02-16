/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import * as d3 from 'd3';

import BarChart from './js/BarChart';
import PieChart from './js/PieChart';
import BarChart2 from './js/BarChart2';

export default class Testing extends Component {
  render() {

    var data1 = [21, 43, 32, 7, 11, 14, 31, 11, 14, 31, 33];
    var data2 = [
      {letter: 'A', frequency: 13},
      {letter: 'B', frequency: 11},
      {letter: 'C', frequency: 2},
      {letter: 'D', frequency: 6},
      {letter: 'E', frequency: 14},
      {letter: 'F', frequency: 6},
      {letter: 'G', frequency: 20},
      {letter: 'H', frequency: 7},
      {letter: 'I', frequency: 12},
      {letter: 'J', frequency: 3},
      {letter: 'K', frequency: 17},
      {letter: 'L', frequency: 21},
      {letter: 'M', frequency: 3},
      {letter: 'N', frequency: 21},
      {letter: 'O', frequency: 33},
      {letter: 'P', frequency: 18},
      {letter: 'Q', frequency: 41},
      {letter: 'R', frequency: 34},
      {letter: 'S', frequency: 12},
      {letter: 'T', frequency: 18},
      {letter: 'U', frequency: 22},
    ];
    var piedata = [
      {"number":  8, "name": 'Fun activities'},
      {"number": 7, "name": 'Dog'},
      {"number": 16, "name": 'Food'},
      {"number": 23, "name": 'Car'},
      {"number": 42, "name": 'Rent'},
      {"number":  4, "name": 'Misc'},
    ];

    return (
      <View style={styles.container}>
        {/*<BarChart data={data1}/>*/}
        <PieChart data={piedata}/>
        <BarChart2 width={320} height={240} data={data2}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-between',
    // alignSelf: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Testing', () => Testing);
