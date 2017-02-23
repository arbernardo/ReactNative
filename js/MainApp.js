/**
 * Created by Ace on 2/17/2017.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input, Item } from 'native-base';

import RecentDocuments from './components/RecentDocuments';

export default class MainApp extends Component {


    render() {

        return (
            <RecentDocuments/>
        );
    }
}
