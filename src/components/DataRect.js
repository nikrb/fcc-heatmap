import React from 'react';

const renderRectangles = (props) => {
  return (data, index) => {
    const {coords} = data;
    const rectProps = {
      x: props.xScale(coords[0]),
      y: props.yScale(coords[1]),
      width: props.xScale.bandwidth(),
      height: props.yScale.bandwidth(),
      key: index,
      fill: props.colourScale( data.temperature),
      onMouseEnter: props.handleMouseEnter.bind( this, data),
      onMouseLeave: props.handleMouseLeave
    };
    return <rect {...rectProps} />;
  };
};

export default (props) => {
  return (
    <g>
      { props.data.map(renderReactangles(props)) }
    </g>
  );
}
