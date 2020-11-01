import React from "react";

export const ValidationComponent = ({ len }) => {
  if (len === 0) return <p></p>;
  return len > 5 ? <p>Text Long Enough</p> : <p>Text too short !!</p>;
};
