import React from 'react';

export default () => {
  const heading = {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "10px auto"
  };
  const sub_heading = {
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "normal"
  };
  const sub_heading2 = {
    textAlign: "center",
    fontSize: "0.8rem",
    fontWeight: "normal"
  };
  return (
    <div>
      <div style={heading}>
        Monthly Global Land-Surface Temperature
      </div>
      <div style={sub_heading}>
        1753 - 2015
      </div>
      <div style={sub_heading2}>
        Temperatures are in Celsuis 
      </div>
    </div>
  );
};
