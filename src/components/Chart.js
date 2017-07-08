import React from 'react';
import ScatterPlot from './ScatterPlot';
import Heading from './Heading';
import Legend from './Legend';

export default (props) => {
  const new_props = {
    ...props
  };
  const wrapper = {
    position: "relative"
  };
  const legend = {
    top: "50%",
    left: "80%",
    width: "150px"
  };
  return (
    <div style={wrapper}>
      <Heading />
      <Legend metrix={legend} />
      <Heatmap {...new_props} />
    </div>
  );
};
