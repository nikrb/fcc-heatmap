import React from 'react';
import Heatmap from './Heatmap';
import Heading from './Heading';
import Legend from './Legend';

export default (props) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const formatMonths = (d) => {
    return months[d-1];
  };
  const new_props = {
    ...props,
    yaxis_format : formatMonths,
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
