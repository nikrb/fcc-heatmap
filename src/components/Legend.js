import React from 'react';

export default (props) => {
  const base = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "4em",
    height: "2em",
    fontSize: "0.6em",
    color: "white"
  };
  const colours = props.colourScale( props);
  const colour_boxes = props.temp_values.map( (temp,ndx) => {
    const c = colours( temp);
    return (<div key={ndx} style={{...base, backgroundColor: c}}>{temp.toFixed(2)}</div>);
  });
  const wrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  };
  return (
    <div style={wrapper}>
      {colour_boxes}
    </div>
  );
};
