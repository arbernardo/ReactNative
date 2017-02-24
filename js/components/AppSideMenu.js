/**
 * Created by ace on 2/23/17.
 */
import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import Drawer from 'react-native-drawer'


export default class AppSideMenu extends React.Component {

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render () {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                content={<Text>LOOOL</Text>}
                openDrawerOffset={0.2}
            >
                <View>
                    <TouchableWithoutFeedback onPress={() => this.openControlPanel()}>
                        <View>
                            <Text>HAHAHA</Text>
                        </View>

                    </TouchableWithoutFeedback>
                </View>
            </Drawer>
        )
    }
}