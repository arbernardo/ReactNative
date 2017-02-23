/**
 * Created by ace on 2/23/17.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';

import DocumentCard from './DocumentCard';

export default class RecentDocuments extends Component {


    render() {


        return (
            <View style={styles.searchBarView}>
                <SearchBar
                    containerStyle={styles.searchBar}
                    placeholder="Search Document"
                    lightTheme
                    noIcon={true}
                />
                <View style={styles.content}>
                    <DocumentCard/>
                    <DocumentCard/>
                    <DocumentCard/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    searchBarView: {
        marginTop: 40,
    },
    searchBar : {
        backgroundColor: "rgba(0,0,0,0)"
    },
    content: {
        padding: 0,
    }
});