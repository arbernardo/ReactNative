/**
 * Created by Ace on 2/28/2017.
 */
import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import {bardata, bardata2} from '../sampledata';
import BarChart from '../charts/BarChart';

const lettersData = {data: bardata, x_name: "letter", y_name: "frequency"};
const yearData = {data: bardata2, x_name: "year", y_name: "price"};

export default class BarChartPage extends Component {
    state = lettersData;

    render() {

        return (
            <View style={styles.barView}>
                <BarChart width={350} height={200} {...this.state}/>

                <View style={styles.buttonView}>
                    <Button title={"Letters"} style={styles.button} onPress={() => {this.setState(lettersData)}}/>
                    <Button title={"Year"} style={styles.button} onPress={() => {this.setState(yearData)}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    barView: {
        flex: 1,
        marginTop:50
    },
    buttonView: {
        flexDirection: "row",
        padding: 50,
        justifyContent: "space-between",
    },
    button: {
        // width: 100,
        // height: 50,
    }
});