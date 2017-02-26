/**
 * Created by ace on 2/23/17.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Hr from 'react-native-hr';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class RecentDocuments extends Component {


    render() {


        return (
            <View style={styles.recentDocuments}>
                <View style={styles.labelView}>
                    <Icon name="docs" size={20} color="#D3D3D3" />
                    <Text style={styles.labelText}>Recent Documents: </Text>
                </View>

                <Hr lineColor={"#D3D3D3"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    recentDocuments: {
        padding: 10,
    },
    labelText: {
        fontWeight: "bold",
        fontSize: 16,
        paddingLeft: 10,
    },
    labelView: {
        flexDirection: "row",
        padding: 10,
    }
});