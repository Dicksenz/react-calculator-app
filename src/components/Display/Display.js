import React from "react";
import "../../App.css";

const Display = props => {
  return (
    <div className="result">
      <p>{props.result}</p>
    </div>
  );
};

export default Display;
