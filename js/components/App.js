/**
 * Created by ace on 2/23/17.
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Drawer from 'react-native-drawer';

import MainToolbar from './MainToolbar';
import SideMenuContent from './SideMenuContent';

import HomePage from './HomePage';
import BarChartPage from './BarChartPage';
import PieChartPage from './PieChartPage';

import {HeaderConstant} from './Constants';

export default class App extends React.Component {

    state = {drawerOpen: false, currentView: <HomePage/>, currentHeader: HeaderConstant.Home};
    closeDrawer = (selectedComponent) => {
        var currentView, currentHeader;
        switch (selectedComponent) {
            case "Main":
                currentView = <HomePage />
                currentHeader = HeaderConstant.Home;
                break;
            case "PieChart":
                currentView = <PieChartPage />
                currentHeader = HeaderConstant.PieChart;
                break;
            case "BarChart":
                currentView = <BarChartPage />
                currentHeader = HeaderConstant.BarChart;
        }
        this.setState({drawerOpen: !this.state.drawerOpen, currentView: currentView, currentHeader: currentHeader});
        this._drawer.close();
    };
    openDrawer = () => {
        this._drawer.open()
        this.setState({drawerOpen: !this.state.drawerOpen})
    };

    render () {

        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                content={<SideMenuContent closeDrawer={(selectedComponent) => this.closeDrawer(selectedComponent)}/>}
                openDrawerOffset={0.3}
                type={"overlay"}
                tapToClose={true}
            >

                <MainToolbar {...this.state.currentHeader} openDrawer={() => {this.openDrawer()}} />
                {this.state.currentView}
            </Drawer>
        )
    }
}
