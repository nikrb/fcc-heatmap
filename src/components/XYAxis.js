import React  from 'react';
import Axis   from './Axis';

export default (props) => {
  const xSettings = {
    translate: 'translate(0,' + (props.height - props.padding) + ')',
    scale: props.xScale,
    orient: 'bottom',
    formatter: props.xaxis_format,
    axis_label: { text: props.axis_labels.xaxis,
      x: props.width/2, y:props.padding, anchor: "middle"},
    ticks: props.x_ticks
  };
  const ySettings = {
    translate: 'translate(' + props.padding + ', 0)',
    scale: props.yScale,
    orient: 'left',
    formatter: props.yaxis_format,
    axis_label: { text: props.axis_labels.yaxis,
      x: -props.padding/2, y:props.padding, anchor: "end", rotate: "-90deg"},
    ticks: props.y_ticks
  };
  return (
    <g>
      <Axis {...xSettings}/>
      <Axis {...ySettings}/>
    </g>
  );
};
