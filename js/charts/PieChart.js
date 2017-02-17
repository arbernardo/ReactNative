/**
 * Created by ace on 2/15/17.
 */
import React, { Component } from 'react';
import { ART, View, Text } from 'react-native';

import * as shape from 'd3-shape';
import * as scale from 'd3-scale';

import * as d3 from 'd3';

const {
    Group,
    Shape,
    Surface,
    Transform,
} = ART;

export default class PieChart extends Component {

    render() {

        var piedata = this.props.data;
        var width = this.props.width;
        var height = this.props.height;
        var radius = Math.min(width, height) / 2;
        var color = scale.scaleOrdinal().range(["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477"]);

        var arcs = shape.pie().value(function(d) { return d.number})(piedata);
        var labelArc = d3.arc().outerRadius(radius - 40).innerRadius(radius - 40);

        var pieSlice = [];
        var texts = [];

        arcs.forEach(function (d, i) {
            var path = shape.arc()
                .outerRadius(radius - 10)
                .padAngle(0.03)
                .innerRadius(30)(arcs[i]);

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
                <ART.Text
                    key={i}
                    transform={new Transform().translate(xy[0], xy[1])}
                    font={{fontFamily: "Arial", fontSize:8}}
                    fill = "#000000"
                    alignment = "center"
                >
                    {piedata[i].name}
                </ART.Text>
            );
        });


        return (
            <View style={{flex:1,  flexDirection:"row"}}>
                <View style={{height:height, backgroundColor:"white",}}>
                    <Surface width={width} height={height} >
                        <Group x={width/2} y={height/2}>
                            {pieSlice}
                            {texts}
                        </Group>
                    </Surface>
                </View>

                <View>
                    <Text>"HAHAHA"</Text>
                </View>
            </View>
        );
    }
}