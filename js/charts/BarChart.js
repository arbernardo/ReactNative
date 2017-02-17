/**
 * Created by Ace on 2/15/2017.
 */
import React, {Component} from 'react';
import {ART, View} from 'react-native';

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as axes from 'd3-axis';
import * as d3 from 'd3';

import Rectangle from './shapes/Rectangle';
import Line from './shapes/Line';

const {
    Group,
    Shape,
    Surface,
    Text,
    Transform,
    Path,
} = ART;

export default class BarChart2 extends Component {

    constructor(props) {
        super(props)



        this.state = {
            transition: []
        }

    }

    componentWillReceiveProps(nextProps) {
        // console.log("aaaa");
    }

    render() {

        var data = this.props.data;
        var xProperty = this.props.x_name;
        var yProperty = this.props.y_name;

        var margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = this.props.width - margin.left - margin.right,
            height = this.props.height - margin.top - margin.bottom;

        var xScale = scale.scaleBand().rangeRound([0, width]).padding(0.3).domain(data.map(function(d) {return d[xProperty];})),
            yScale = scale.scaleLinear().rangeRound([height, 0]).domain([0, d3.max(data, function(d) { return d[yProperty];})]);

        var color = scale.scaleLinear().domain([0, d3.max(data, function(d) {return d[yProperty]})]).range(["#FFB832", "#FF0000"]);

        //Y-Axis
        var yAxis = axes.axisLeft(yScale);
        var arr = yAxis.scale().ticks(6);


        var bars = [];
        var ticksX = [];
        var ticksY = [];
        data.forEach(function(d, i) {
            bars.push(
                <Group key={"barG" + i}>
                    <Rectangle
                        key={"bar" + i}
                        x={xScale(d[xProperty])}
                        y={yScale(d[yProperty])}
                        width={xScale.bandwidth()}
                        height={height-yScale(d[yProperty])}
                        stroke={color(d[yProperty])}
                        fill={color(d[yProperty])}
                    />
                    <Text
                        key={"barLabel" + i}
                        x={xScale(d[xProperty]) + xScale.bandwidth()/2}
                        y={yScale(d[yProperty]) - (xScale.bandwidth() > 12 ? 12 : xScale.bandwidth())}
                        font={{fontFamily:"Arial", fontSize: xScale.bandwidth() > 12 ? 12 : xScale.bandwidth()}}
                        fill="#000000"
                        alignment="center"
                    >
                        {d[yProperty].toString()}
                    </Text>
                    <Text
                        key={"xLabel" + i}
                        x={xScale(d[xProperty]) + xScale.bandwidth()/2}
                        y={height}
                        font={{fontFamily:"Arial", fontSize:xScale.bandwidth() > 12 ? 12 : xScale.bandwidth()}}
                        fill="#000000"
                        alignment="center"
                    >
                        {d[xProperty].toString()}
                    </Text>
                </Group>
            );
        });

        arr.forEach(function(d, i) {
            ticksY.push(
                <Group key={"g" + i}>
                    <Text
                        key={"text" + i}
                        x={0 - 10}
                        y={yScale(d) - 8}
                        font={{fontFamily:"Arial", fontSize:12}}
                        fill="#000000"
                        alignment="center"
                    >
                        {d.toString()}
                    </Text>
                    <Line
                        key={"shape" + i}
                        strokeWidth={1}
                        stroke={"#000"}
                        x1={0} y1={yScale(d)}
                        x2={5} y2={yScale(d)}
                    />
                </Group>
            );
        });

        return (
          <View style={{justifyContent: "center", flex:1, alignItems: "center", backgroundColor: "#a3a2a1"}}>
              <Surface width={this.props.width} height={this.props.height}>
                  <Group transform={new Transform().translate(margin.left, margin.top)}>
                      {bars}
                      {ticksX}
                      {ticksY}
                      <Line stroke={"#000"} strokeWidth={1} x1={0} y1={0} x2={0} y2={height + 4} />
                      <Line stroke={"#000"} strokeWidth={1} x1={0} y1={height} x2={width} y2={height}/>
                  </Group>

              </Surface>
          </View>
        );
    }
}