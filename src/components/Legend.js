import React from 'react';
import * as d3 from 'd3';

export default (props) => {
  const min_temp = (data) => d3.min( data, (d) => d.temperature)
  const mean_temp = (data) => d3.mean( data, (d) => d.temperature);
  const max_temp = (data) => d3.max( data, (d) => d.temperature);
  const colourScale = (props) => {
    return d3.scaleLinear()
      .domain( [min_temp(props.data), mean_temp(props.data), max_temp(props.data)])
      .range( ['blue', 'yellow', 'red'])
  };
  const min = min_temp( props.data);
  const max = max_temp( props.data);
  const colours = colourScale( props);
  const tdiff = (max-min)/6;
  let cvals = []
  for( let i=0; i<6; i++){
    cvals.push( min + i * tdiff);
  }
  cvals.push( max);
  const base = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "4em",
    height: "2em",
    fontSize: "0.6em",
    color: "white"
  };
  const colour_boxes = cvals.map( (temp,ndx) => {
    const c = colours( temp);
    return (<div key={ndx} style={{...base, backgroundColor: c}}>{temp.toFixed(2)}</div>);
  });
  const wrapper = {
    display: "flex",
    flexDirection: "row"
  };
  return (
    <div style={wrapper}>
      Legend
      {colour_boxes}
    </div>
  );
};
