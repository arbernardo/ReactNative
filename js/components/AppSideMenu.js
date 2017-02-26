/**
 * Created by ace on 2/23/17.
 */
import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import Drawer from 'react-native-drawer';

import MainToolbar from './MainToolbar';
import SideMenuContent from './SideMenuContent';
import RecentDocuments from './RecentDocuments';

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
    render () {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                content={<SideMenuContent/>}
                openDrawerOffset={0.3}
                type={"overlay"}
            >
                <View>
                    <MainToolbar openDrawer={() => {this.openDrawer()}} />
                    <RecentDocuments />
                </View>
            </Drawer>
        )
    }
}
