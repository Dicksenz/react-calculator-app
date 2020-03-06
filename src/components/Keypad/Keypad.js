import React from "react";
const Keypad = props => {
  return (
    <div className="button">
      {props.value.map((value, index) => (
        <button
          name={value}
          key={index}
          onClick={e => props.onClick(e.target.name)}
        >
          {value}
        </button>
      ))}
      <br />
    </div>
  );
};

export default Keypad;
