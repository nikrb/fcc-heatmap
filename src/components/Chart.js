import React from 'react';
import * as d3 from 'd3';
import Heatmap from './Heatmap';
import Heading from './Heading';
import Legend from './Legend';

export default (props) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const formatMonths = (d) => {
    return months[d-1];
  };
  // pass colour scale to heatmap and legend
  const min_temp = (data) => d3.min( data, (d) => d.temperature)
  const mean_temp = (data) => d3.mean( data, (d) => d.temperature);
  const max_temp = (data) => d3.max( data, (d) => d.temperature);
  const colourScale = (props) => {
    return d3.scaleLinear()
      .domain( [min_temp(props.data), mean_temp(props.data), max_temp(props.data)])
      .range( ['blue', 'yellow', 'red'])
  };

  const new_props = {
    ...props,
    yaxis_format : formatMonths,
    min_temp: min_temp(props.data),
    max_temp: max_temp(props.data),
    colourScale: colourScale,
    // ticks every 20 years
    x_ticks: 20
  };
  return (
    <div>
      <Heading />
      <Heatmap {...new_props} />
      <Legend {...new_props} />
    </div>
  );
};
