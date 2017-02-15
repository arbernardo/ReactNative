/**
 * Created by ace on 2/14/17.
 */
import React, { Component } from 'react';
import { ART, View, Image, Text, TextInput, Dimensions } from 'react-native';

import * as scale from 'd3-scale';
import * as axis from 'd3-axis';
import * as shape from 'd3-shape';

import * as d3 from 'd3';

const {
    Group,
    Shape,
    Surface,
} = ART;

export default class BarChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        }
    }

    render() {
        var data = this.state.data;
        console.log(data);

        var width = 320;
        var height = 240;
        var padding = 5;
        var barWidth = (width/data.length) - padding;
        const scaleX = scale.scaleLinear().domain([0, data.length]).range([0, width]);
        const scaleY = scale.scaleLinear().domain([0, d3.max(data)]).range([0, height]);

        const xAxis = d3.axisBottom(scaleX).ticks(data.length);

        var bars = [];
        data.forEach(function(d, i) {
            bars.push(<Rectangle x={scaleX(i)} y={height - scaleY(d)} width={barWidth} height={scaleY(d)} key={i} stroke="#000" fill="#1212a2"/>);
        });

        return (
            <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                <Surface width={width} height={height} >
                    <Group x={0} y={0}>
                        {bars}
                    </Group>
                </Surface>
            </View>
        );
    }
}

export class PieChart extends Component {

    render() {

        var width = 320;
        var height = 240;

        var piedata = [
            {"number":  8, "name": 'Fun activities'},
            {"number": 7, "name": 'Dog'},
            {"number": 16, "name": 'Food'},
            {"number": 23, "name": 'Car'},
            {"number": 42, "name": 'Rent'},
            {"number":  4, "name": 'Misc'},
        ];

        var arcs = shape.pie().value(function(d) { return d.number})(piedata);


        return (
            <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                <Surface width={width} height={height} style={{fill: '#1214f1'}}>
                    <Group x={0} y={0}>

                    </Group>
                </Surface>
            </View>
        );
    }
}