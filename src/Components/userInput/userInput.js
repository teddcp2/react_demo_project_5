import React from "react";

export const UserInput = (props) => {
  return (
    <div class="ui input">
      <input
        type="text"
        value={props.value}
        onChange={props.handleChange}
        placeholder="Type here..."
      />
    </div>
  );
};
