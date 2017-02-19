/**
 * Created by Ace on 2/19/2017.
 */
import React, { Component } from 'react';
import {
    SwitchIOS,
    View,
    Text,
    Button,
    TouchableHighlight
} from 'react-native';


export default class ControlPanel extends Component {
    render() {
        return (
            <View>
                <Text>
                    Control Panel
                </Text>
                <TouchableHighlight
                    underlayColor="#B5B5B5"
                    onPress={() => {
                        this.props.onPress();
                    }}>
                    <Text>OOOOOOOPPPPP</Text>
                </TouchableHighlight>
            </View>
        )
    }
}