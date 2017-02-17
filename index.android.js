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

import PieChart from './js/charts/PieChart';
import BarChart from './js/charts/BarChart';


export default class Testing extends Component {
  render() {

    var data1 = [21, 43, 32, 7, 11, 14, 31, 11, 14, 31, 33];
    var data2 = [
      {letter: 'A1', frequency: 13},
      {letter: 'B1', frequency: 11},
      {letter: 'C1', frequency: 2},
      {letter: 'D1', frequency: 6},
      {letter: 'E1', frequency: 14},
      {letter: 'F1', frequency: 41},
      {letter: 'G1', frequency: 20},
      {letter: 'H1', frequency: 7},
      {letter: 'I1', frequency: 12},
      {letter: 'J1', frequency: 3},
      {letter: 'K1', frequency: 17},
      {letter: 'L1', frequency: 21},
      {letter: 'M1', frequency: 3},
      {letter: 'N', frequency: 21},
      {letter: 'O', frequency: 33},
      {letter: 'P', frequency: 18},
      {letter: 'Q', frequency: 31},
      {letter: 'R', frequency: 34},
      {letter: 'S', frequency: 12},
      {letter: 'T', frequency: 18},
      {letter: 'U', frequency: 22},
    ];

    var data3 =[
      {price: 10, year: 2010},
      {price: 11, year: 2011},
      {price: 10, year: 2012},
      {price: 14, year: 2013},
      {price: 11, year: 2014},
      {price: 12, year: 2015},
      {price: 13, year: 2016},
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
        <PieChart data={piedata} width={240} height={240}/>
        <View style={{flex:1}}>
          <BarChart width={320} height={240} data={data2} x_name={"letter"} y_name={"frequency"}/>
        </View>
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
