import React from 'react';
import * as d3 from 'd3';
import DataRect from './DataRect';
import XYAxis from './XYAxis';

const xScale = (props) => {
  return d3.scaleBand()
    .domain( d3.range( d3.min( props.data, (d) => d.year), d3.max( props.data, (d) => d.year)+1))
    .range([props.padding, props.width - props.padding * 2]);
};
const yScale = (props) => {
  return d3.scaleBand()
    // .domain(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
    .domain( d3.range( d3.min( props.data, (d) => d.month), d3.max( props.data, (d)=>d.month)+1))
    .range([props.padding, props.height - props.padding]);
};
const min_temp = (data) => d3.min( data, (d) => d.temperature)
const mean_temp = (data) => d3.mean( data, (d) => d.temperature);
const max_temp = (data) => d3.max( data, (d) => d.temperature);
const colourScale = (props) => {
  return d3.scaleLinear()
    .domain( [min_temp(props.data), mean_temp(props.data), max_temp(props.data)])
    .range( ['blue', 'yellow', 'red'])
};
const marshalProps = (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props),
    colourScale: colourScale(props) };
  return {...props, ...scales};
};
export default (props) => {
  const d3Props = marshalProps(props);
  return (
    <svg width={d3Props.width} height={d3Props.height}>
      <DataRect {...d3Props}/>
      <XYAxis {...d3Props}/>
    </svg>
  );
}
