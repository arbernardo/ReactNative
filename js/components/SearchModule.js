/**
 * Created by ace on 2/24/17.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Container, Content, Item, Picker, Header, Left, Icon} from 'native-base';


export default class SearchModule extends Component {

    state = {selected: 'key0'}

    render() {

        return (<View></View>);
    }
}

const data = [
    {
        "label": "Status",

    },
];

styles = StyleSheet.create({
    headingContainer: {
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: "#000"
    },
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22
    },
    labelContainerStyle: {
        // marginTop: 8
    }
});

