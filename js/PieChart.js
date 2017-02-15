/**
 * Created by ace on 2/15/17.
 */
import React, { Component } from 'react';
import { ART, View, Image, TextInput, Dimensions } from 'react-native';

import * as shape from 'd3-shape';
import * as scale from 'd3-scale';

import * as d3 from 'd3';

const {
    Group,
    Shape,
    Surface,
    Text,
    Transform,
} = ART;

export default class PieChart extends Component {

    render() {

        var piedata = this.props.data;
        var width = 320;
        var height = 240;
        var radius = Math.min(width, height) / 2;
        var color = scale.scaleOrdinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        var arcs = shape.pie().value(function(d) { return d.number})(piedata);
        var labelArc = d3.arc().outerRadius(radius - 40).innerRadius(radius - 40);

        var pieSlice = [];
        var texts = [];

        arcs.forEach(function (d, i) {
            var path = shape.arc()
                .outerRadius(radius - 10)
                .padAngle(0.03)
                .innerRadius(0)(arcs[i]);

            pieSlice.push(
                <Shape
                    key={i}
                    d={path}
                    strokeWidth={1}
                    stroke={"#FFF"}
                    fill={color(i)}
                />
            );

            var xy = labelArc.centroid(arcs[i]);
            texts.push(
                <Text
                    key={i}
                    transform={new Transform().translate(xy[0], xy[1])}
                    font={{fontFamily: "Arial", fontSize:8}}
                    fill = "#000000"
                    alignment = "center"
                >
                    {piedata[i].name}
                </Text>
            );
        });


        return (
            <View style={{justifyContent: "center", flex: 1, alignItems: "center", backgroundColor: "#AAAAAA"}}>
                <Surface width={width} height={height} >
                    <Group x={width/2} y={height/2}>
                        {pieSlice}
                        {texts}
                    </Group>
                </Surface>
            </View>
        );
    }
}