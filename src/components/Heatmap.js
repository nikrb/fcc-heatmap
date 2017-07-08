import React from 'react';
import * as d3 from 'd3';
import XYAxis from './XYAxis';

const xScale = (props) => {
  return d3.scaleBand()
    .domain([props.data[0].year, props.data[props.data.length-1].year])
    .range([props.padding, props.width - props.padding * 2]);
};
const yScale = (props) => {
  return d3.scaleBand()
    // .domain(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
    .domain( [0,11])
    .range([props.padding, props.height - props.padding]);
};
const min_temp = d3.min( data, (d) => d.temperature)
const mean_temp = d3.mean( data, (d) => d.temperature);
const max_temp = d3.max( data, (d) => d.temperature);
const colourScale = (props) => {
  return d3.scaleLinear()
    .domain( [min_temp, mean_temp, max_temp])
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
