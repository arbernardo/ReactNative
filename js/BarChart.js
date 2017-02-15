/**
 * Created by ace on 2/15/17.
 */
import React, { Component } from 'react';
import { ART, View, Image, TextInput, Dimensions } from 'react-native';

import * as scale from 'd3-scale';
import * as ax from 'd3-axis';
import * as shape from 'd3-shape';

import * as d3 from 'd3';

const {
    Group,
    Shape,
    Surface,
    Text,
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

        var width = 320;
        var height = 240;
        var padding = 5;
        var barWidth = (width/data.length) - padding;
        const scaleX = scale.scaleLinear().domain([0, data.length]).range([0, width]);
        const scaleY = scale.scaleLinear().domain([0, d3.max(data)]).range([0, height]);

        var a = ax.axisBottom(scaleX).ticks(data.length);
        // var xAxis = axis().scale(scaleX).orientation('bottom').ticks(data.length);//d3.axisBottom(scaleX).ticks(data.length);

        // var axes = [];
        // data.forEach(function(d, i) {
        //     axes.push(xAxis(i));
        // });

        console.log(a);

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

class Rectangle extends Component {

    render() {
        var x = this.props.x,
            y = this.props.y,
            width = parseFloat(this.props.width) + parseFloat(x),
            height = parseFloat(this.props.height) + parseFloat(y),
            stroke = this.props.stroke,
            strokeWidth = this.props.strokeWidth;
        fill = this.props.fill;

        var path = "M" + x + " " + y + " H " + width + " V " + height + " H " + x + " L " + x + " " + y;
        return (
            <Shape d={path} stroke={stroke} strokeWidth={strokeWidth} fill={fill}/>
        );
    }
}