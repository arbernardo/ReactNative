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
import tsv from './resources/data.tsv';

export default class Testing extends Component {
  render() {

    var data1 = [21, 43, 32, 7, 11, 14, 31, 11, 14, 31, 33];
    var data2 = [44, 10, 51, 16, 24];
    var piedata = [
      {"number":  8, "name": 'Fun activities'},
      {"number": 7, "name": 'Dog'},
      {"number": 16, "name": 'Food'},
      {"number": 23, "name": 'Car'},
      {"number": 42, "name": 'Rent'},
      {"number":  4, "name": 'Misc'},
    ];

    var bar2Data;

    // d3.tsv(file, function(d){return d.frequency;}, function(error, data){
    //   console.log(data);
    // });

    // console.log(file);

    return (
      <View style={styles.container}>
        <BarChart data={data1}/>
        {/*<PieChart data={piedata}/>*/}
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
