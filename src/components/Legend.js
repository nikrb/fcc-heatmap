import React from 'react';

export default (props) => {
  const colours = props.colourScale( props);
  const tdiff = (props.max_temp - props.min_temp)/6;
  let cvals = []
  for( let i=0; i<6; i++){
    cvals.push( props.min_temp + i * tdiff);
  }
  cvals.push( props.max_temp);
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
      {colour_boxes}
    </div>
  );
};
