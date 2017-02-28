/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './js/components/App';


export default class Testing extends Component {

  render() {
    return (
        <App />
    );
  }
}

AppRegistry.registerComponent('Testing', () => Testing);
