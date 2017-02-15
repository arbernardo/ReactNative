/**
 * Created by Ace on 2/15/2017.
 */
import React, {Component} from 'react';
import {ART, View} from 'react-native';

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as d3 from 'd3';

const {
    Group,
    Shape,
    Surface,
    Text,
} = ART;

export default class BarChart2 extends Component {

    render() {

        var data = this.props.data;
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = this.props.width - margin.left - margin.right,
            height = this.props.height - margin.top - margin.bottom;

        var xScale = scale.scaleBand().rangeRound([0, width]).padding(0.5);

        return (
          <View style={{justifyContent: "center", flex:1, alignItems: "center"}}>
              <Surface width={this.props.width} height={this.props.height}>
                  <Group>

                  </Group>
              </Surface>
          </View>
        );
    }
}