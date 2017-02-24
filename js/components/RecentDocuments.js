/**
 * Created by ace on 2/23/17.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Hr from 'react-native-hr';

import DocumentCard from './DocumentCard';

export default class RecentDocuments extends Component {


    render() {


        return (
            <View style={styles.recentDocuments}>
                <Text style={styles.label}>Recent Documents: </Text>
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
                <DocumentCard/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    recentDocuments: {
        padding: 10,
    },
    label: {
        fontWeight: "bold"
    }
});