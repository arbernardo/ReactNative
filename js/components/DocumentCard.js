/**
 * Created by ace on 2/23/17.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-elements';

export default class DocumentCard extends Component {


    render() {
        var logo = 'http://nativebase.io/docs/v2.0.0/assets/img/favicon.png';
        var random = Math.random();
        var randomText = parseInt(random * 100).toString();
        return (
            <Card containerStyle={styles.containerStyle}>
                <View style={styles.cardHeader}>
                    <Image style={styles.imageHeader} source={{uri: logo}}  />
                    <Text style={styles.textHeader}>Document {randomText}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.contentText}>Office Code: ABC</Text>
                    <Text style={styles.contentText}>Office Name: DEF</Text>
                </View>
                <View style={styles.cardFooter}>
                    <Text style={styles.textFooter}>{new Date().toTimeString()}</Text>
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle : {

    },
    cardHeader :{
        padding: 0,
        flexDirection: "row",
    },
    imageHeader: {
        width: 20,
        height: 20,
    },
    textHeader: {
        marginLeft: 10,
        fontWeight: "bold"
    },
    content: {
        marginTop: 5,
        marginLeft: 12,
    },
    contentText:{
        fontSize: 10,
    },
    cardFooter: {
        alignItems: "flex-end",
    },
    textFooter: {
        fontSize: 8,
    }
});