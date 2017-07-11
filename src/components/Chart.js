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
  const min_temp = d3.min( props.data, (d) => d.temperature);
  const mean_temp = d3.mean( props.data, (d) => d.temperature);
  const max_temp = d3.max( props.data, (d) => d.temperature);
  const colourScale = (props) => {
    return d3.scaleLinear()
      .domain( [min_temp, mean_temp, max_temp])
      .range( ['blue', 'yellow', 'red'])
  };
  const tdiff = ( max_temp - min_temp)/6;
  let tvals = []
  for( let i=0; i<6; i++){
    tvals.push( min_temp + i * tdiff);
  }
  tvals.push( max_temp);

  const new_props = {
    ...props,
    yaxis_format : formatMonths,
    colourScale: colourScale,
    temp_values: tvals,
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
