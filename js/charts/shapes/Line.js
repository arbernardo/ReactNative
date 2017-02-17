/**
 * Created by ace on 2/17/17.
 */
import React, {Component} from 'react';
import {ART} from 'react-native';

const {
    Shape,
    Path,
} = ART;

export default class Line extends Component {

    render() {

        var x1 = this.props.x1,
            y1 = this.props.y1,
            x2 = this.props.x2,
            y2 = this.props.y2;

        var path = new Path();
        path.moveTo(x1,y1);
        path.lineTo(x2, y2);

        return (
            <Shape
                strokeWidth={this.props.strokeWidth}
                fill={this.props.fill}
                stroke={this.props.stroke}
                d={path}
            />
        );
    }
}