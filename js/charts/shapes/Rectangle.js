/**
 * Created by ace on 2/16/17.
 */
import React, { Component } from 'react';
import { ART } from 'react-native';

const {
    Shape,
} = ART;


export default class Rectangle extends Component {

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