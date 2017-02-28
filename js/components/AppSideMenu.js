/**
 * Created by ace on 2/23/17.
 */
import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet, Navigator} from 'react-native';

import Drawer from 'react-native-drawer';

import MainToolbar from './MainToolbar';
import SideMenuContent from './SideMenuContent';
import RecentDocuments from './RecentDocuments';
import {Scene, Router} from 'react-native-router-flux';

import PieChartHeader from './PieChartHeader';
import PieChart from '../charts/PieChart';

const piedata = [
    {"number":  8, "name": 'Fun activities'},
    {"number": 7, "name": 'Dog'},
    {"number": 16, "name": 'Food'},
    {"number": 23, "name": 'Car'},
    {"number": 42, "name": 'Rent'},
    {"number":  4, "name": 'Misc'},
];

export default class AppSideMenu extends React.Component {

    state = {drawerOpen: false};
    closeDrawer = () => {
        this._drawer.close()
        this.setState({drawerOpen: !this.state.drawerOpen})
    };
    openDrawer = () => {
        this._drawer.open()
        this.setState({drawerOpen: !this.state.drawerOpen})
    };

    _renderScene = (route, navigator) => {
        switch (route.name) {
            case "Main":
                return (
                    <Drawer
                        ref={(ref) => this._drawer = ref}
                        content={<SideMenuContent navigator={navigator}/>}
                        openDrawerOffset={0.3}
                        type={"overlay"}
                    >
                        <View>
                            <MainToolbar navigator={navigator} openDrawer={() => {this.openDrawer()}} />
                            <RecentDocuments />
                        </View>

                    </Drawer>
                );
            case "PieChart":
                return (
                    <Drawer
                        ref={(ref) => this._drawer = ref}
                        content={<SideMenuContent navigator={navigator}/>}
                        openDrawerOffset={0.3}
                        type={"overlay"}
                    >
                        <View style={{flex: 1}}>
                            <PieChartHeader openDrawer={() => this.openDrawer()}/>
                            <View style={{flex:1, marginTop: 30}}>
                                <PieChart height={200} width={200} data={piedata}/>
                            </View>
                        </View>
                    </Drawer>
                );
        }
    }

    render () {

        return (
            <Navigator
                initialRoute={{name: "Main"}}
                renderScene={this._renderScene}

            />

        )
    }
}
