import React, { Fragment } from "react";

let charStyle = {
  cursor: "pointer"
};

export const CharComponent = ({ value, deleteChar }) => {
  let contnet = value.split("").map((ele, idx) => (
    <div
      key={idx}
      title={ele}
      style={charStyle}
      class="green card"
      onClick={() => deleteChar(idx)}
    >
      <div class="image">{ele}</div>
    </div>
  ));
  return <Fragment>{contnet}</Fragment>;
};
