/**
 * Created by Ace on 2/26/2017.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {Toolbar} from 'react-native-material-ui';

import { COLOR, ThemeProvider } from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: COLOR.tealA700,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};


export default class MainToolbar extends Component {


    render() {

        return (
            <View>
                <ThemeProvider uiTheme={uiTheme}>
                    <Toolbar
                        onLeftElementPress={this.props.openDrawer}
                        leftElement="menu"
                        centerElement={this.props.title}
                        searchable={this.props.searchable}
                    />
                </ThemeProvider>
            </View>
        );
    }
}