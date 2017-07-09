import React from 'react';
import Heatmap from './Heatmap';
import Heading from './Heading';
import Legend from './Legend';

export default (props) => {
  const new_props = {
    ...props,
    // ticks every 20 years
    x_ticks: 20
  };
  return (
    <div>
      <Heading />
      <Heatmap {...new_props} />
      <Legend />
    </div>
  );
};
