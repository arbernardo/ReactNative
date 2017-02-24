/**
 * Created by ace on 2/23/17.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card, Button} from 'react-native-elements';

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
                    <View style={styles.statusView}>
                        <Text style={styles.statusText}> ASSESSED </Text>
                    </View>
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
        marginTop:5,
        padding: 10,
        borderRightColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        // backgroundColor: "rgba(206, 235, 17, .3)"
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
        marginTop: 2,
        marginLeft: 30,
    },
    contentText:{
        fontSize: 9,
    },
    cardFooter: {
        marginTop: 5,
        alignItems: "flex-end",
    },
    textFooter: {
        fontSize: 8,
    },
    statusView: {
        flex:1,
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    statusText: {
        backgroundColor: "#ceeb11"
    }
});