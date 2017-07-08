import React from 'react';

export default (props) => {
  const legend_style = {
    position: "absolute",
    ...props.metrix
  };
  const list_wrapper = {
    padding: "0px"
  };
  return (
    <div style={legend_style}>
      Legend
    </div>
  );
};
