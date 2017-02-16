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

const {
    Group,
    Shape,
    Surface,
    Text,
    Transform,
    Path,
} = ART;

export default class BarChart2 extends Component {

    render() {

        var data = this.props.data;
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = this.props.width - margin.left - margin.right,
            height = this.props.height - margin.top - margin.bottom;

        var xScale = scale.scaleBand().rangeRound([0, width]).padding(0.5).domain(data.map(function(d) {return d.letter;})),
            yScale = scale.scaleLinear().rangeRound([height, 0]).domain([0, d3.max(data, function(d) { return d.frequency;})]);

        var color = scale.scaleOrdinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        var yAxis = axes.axisLeft(yScale);//.ticks(10);
        console.log(yAxis.scale().ticks());
        var arr = yAxis.scale().ticks(8);



        var bars = [];
        var ticksX = [];
        var ticksY = [];
        data.forEach(function(d, i) {
            bars.push(<Rectangle
                key={i}
                x={xScale(d.letter)}
                y={yScale(d.frequency)}
                width={xScale.bandwidth()}
                height={height-yScale(d.frequency)}
                stroke={color(i)}
                fill={color(i)}
            />);

            ticksX.push(
                <Text
                    key={i}
                    x={xScale(d.letter) + xScale.bandwidth()/4}
                    y={height}
                    font={{fontFamily:"Arial", fontSize:xScale.bandwidth()}}
                    fill="#000000"
                >
                    {d["letter"]}
                </Text>
            );
        });

        arr.forEach(function(d, i) {
            ticksY.push(
                <Text
                    key={i}
                    x={0 - 5}
                    y={yScale(d) - 9}
                    font={{fontFamily:"Arial", fontSize:12}}
                    fill="#000000"
                    alignment="center"
                >
                    {d.toString() + " -"}
                </Text>
            );
        });

        const path = new Path();
        path.moveTo(0,height);
        path.lineTo(width, height);
        return (
          <View style={{justifyContent: "center", flex:1, alignItems: "center", backgroundColor: "#a3a2a1"}}>
              <Surface width={this.props.width} height={this.props.height}>
                  <Group transform={new Transform().translate(margin.left, margin.top)}>
                      {bars}
                      {ticksX}
                      {ticksY}

                      <Shape stroke={"#000"} strokeWidth={1} fill={"#000"} d={new Path()
                          .line(0,height + 4)}/>
                      <Shape stroke={"#000"} strokeWidth={1} fill={"#000"} d={path}/>
                  </Group>

              </Surface>
          </View>
        );
    }
}