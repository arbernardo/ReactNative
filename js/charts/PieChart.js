/**
 * Created by ace on 2/15/17.
 */
import React, { Component } from 'react';
import { ART, View, Text, TouchableWithoutFeedback, } from 'react-native';

import * as shape from 'd3-shape';
import * as scale from 'd3-scale';
import Color from './theme/Color';

import * as d3 from 'd3';

const {
    Group,
    Shape,
    Surface,
    Transform,
} = ART;

export default class PieChart extends Component {

    constructor(props) {
        super(props);
        this.state = {highlightedIndex : 0}
        this.getValue = this.getValue.bind(this);
    }

    getValue(item){
        return item["number"];
    }

    getLabel(item) {
        return item["name"];
    }

    createPie(index) {
        var arcs = shape.pie().value(function(d) { return d["number"]})(this.props.data);

        var arc = shape.arc()
            .outerRadius((this.props.width - 40) / 2)
            .padAngle(0.03)
            .innerRadius(30)(arcs[index]);

        var highlightedArc = shape.arc()
            .outerRadius(this.props.width/2)
            .padAngle(0.03)
            .innerRadius(30)(arcs[index]);

        var path = (this.state.highlightedIndex == index) ? highlightedArc : arc;
        return path;
    }

    getColor(index) {
        return Color.colors[index];
    }

    onSelectedItem(index) {
        console.log(this.props.data[index]);
        this.setState({highlightedIndex: index});
    }

    render() {

        var piedata = this.props.data;
        var width = this.props.width;
        var height = this.props.height;

        return (
            <View style={{flex:1,  flexDirection:"row",}}>
                <View style={{flex: 1, height:height, alignItems: "center"}}>
                    <Surface width={width} height={height} >
                        <Group x={width/2} y={height/2}>
                            {
                                piedata.map((item, index) => {
                                return (
                                    <Shape
                                        key={"pie" + index}
                                        d={this.createPie(index)}
                                        strokeWidth={1}
                                        stroke={"#000000"}
                                        fill={this.getColor(index)}
                                    />);
                                })
                            }
                        </Group>
                    </Surface>
                </View>

                <View style={{flexDirection: "column", top: 20, right: 10, }}>
                    {
                        piedata.map((item, index) => {
                            var textUnderline = this.state.highlightedIndex == index ? 'underline' : 'none';

                            return (
                                <TouchableWithoutFeedback key={index} onPress={() => this.onSelectedItem(index)}>
                                    <View style={{backgroundColor: "rgba(0,0,0, 0.3)", padding: 5}}>
                                        <Text style={{color:Color.colors[index], textDecorationLine: textUnderline}}>{this.getLabel(item)}: {this.getValue(item)}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            );
                        })
                    }
                </View>
            </View>
        );
    }
}

class AnimatedPie extends Component {
    constructor(props) {
        super(props);
        this.state = {path: ''}
    }
    componentWillMount() {
        this.computeNextState(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.computeNextState(nextProps);
    }

    computeNextState(nextProps) {
        const {
            d,
        } = nextProps;

        const graph = this.props.d();

        this.setState({
            path: graph
        });

        if (!this.previousGraph) {
            this.previousGraph = graph;
        }

        if (this.props !== nextProps) {
            const pathFrom = this.previousGraph;
            // const
        }
    }

    render() {
        const path = this.state.path;

        return (
            <Shape
                d={path}
                stroke={this.props.color}
                fill={this.props.color}
            />
        );
    }
}