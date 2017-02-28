/**
 * Created by Ace on 2/26/2017.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import { Avatar, Drawer, Toolbar } from 'react-native-material-ui';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 260,
        elevation: 4,
        backgroundColor: 'white',
    },
});

const uiTheme = {
    palette: {
        primaryColor: COLOR.tealA700,
    },
};

export default class SideMenuContent extends Component {

    render() {

        var wfg = {
            uri: 'http://www.dpointtechnologies.com/wp-content/uploads/2015/11/webb-fontaine-logo.jpg'
        };

        var img = {
            uri: 'https://s-media-cache-ak0.pinimg.com/originals/eb/81/e0/eb81e0408244fa84ddfe14ee966f3a48.jpg'
        }

        var avatar = {
            uri: 'http://www.vurtur.com/images/photo.jpg'
        };

        console.log("refs",this.refs);

        return (
            <View style={styles.container}>
                <ThemeProvider uiTheme={uiTheme}>
                    <Drawer>
                        <Drawer.Header image={<Image source={img} />}>
                            <Drawer.Header.Account
                                avatar={<Avatar image={<Image style={{width: 50, height: 50}} source={avatar} />} />}
                                footer={{
                                    dense: true,
                                    centerElement: {
                                        primaryText: 'Juan Dela Cruz',
                                        secondaryText: 'Customs Officer',
                                    },
                                    rightElement: 'arrow-drop-down',
                                }}
                            />
                        </Drawer.Header>
                        <Drawer.Section
                            divider
                            items={[
                                { icon: 'bookmark-border', value: 'Notifications', onPress:() => {} },
                                { icon: 'today', value: 'Calendar', onPress: () => {}},
                                { icon: 'people', value: 'Clients', onPress: () => {}},
                            ]}
                        />
                        <Drawer.Section
                            title="Charts"
                            divider
                            items={[
                                {icon: 'pie-chart', value: 'Pie Chart', onPress: () => {this.props.navigator.push({name: "PieChart"})}},
                                {icon: 'insert-chart', value: 'Bar Chart', onPress: () => {}},
                                {icon: 'timeline', value: 'Line Chart', onPress: () => {}},
                            ]}
                        />
                        <Drawer.Section
                            title="Personal"
                            items={[
                                { icon: 'info', value: 'Info', onPress: () => {}},
                                { icon: 'settings', value: 'Settings', onPress: () => {}},
                            ]}
                        />
                    </Drawer>
                </ThemeProvider>
            </View>

        );
    }

}