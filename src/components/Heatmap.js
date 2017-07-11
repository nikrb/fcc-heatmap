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
    .domain( d3.range( d3.min( props.data, (d) => d.month), d3.max( props.data, (d)=>d.month)+1))
    .range([props.padding, props.height - props.padding]);
};
const marshalProps = (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props),
    colourScale: props.colourScale(props) };
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
};
