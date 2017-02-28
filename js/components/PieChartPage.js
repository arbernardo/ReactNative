/**
 * Created by Ace on 2/28/2017.
 */
import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PieChart from '../charts/PieChart';
import PersonList from './PersonList';
import {piedata, piedata2} from '../sampledata';

export default class PieChartPage extends Component {

    state = {data: piedata, pieTitle: "Amy Farha"};
    viewData = (person) => {
        switch (person.id) {
            case 1:
                this.setState({data: piedata, pieTitle: person.name});
                break;
            case 2:
                this.setState({data: piedata2, pieTitle: person.name});
                break;
        }
    }

    render() {

        return (
            <View style={styles.pieView}>
                <Text style={styles.pieOwner}>{this.state.pieTitle}</Text>
                <PieChart width={200} height={200} {...this.state}/>
                <Text style={styles.listTitle}>Expenditures List</Text>
                <View style={styles.personsView}>
                    <PersonList viewData={(person) => this.viewData(person)}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pieView:{
        flex: 1,
        marginTop: 25,
        backgroundColor: "rgba(0,0,0,0)"
    },
    personsView: {
        flex: 1,
    },
    listTitle: {
        fontSize: 20,
        marginLeft: 10,
    },
    pieOwner: {
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 16,
    }
});