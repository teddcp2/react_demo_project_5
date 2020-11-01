import React, { Fragment } from "react";
import { DisplayLength } from "../DisplayLength/DisplayLength";
import { ValidationComponent } from "../ValidationComponent/validationComponent";

export const UserOutput = ({ value }) => {
  return (
    <Fragment>
      <DisplayLength length={value.length} />
      <ValidationComponent len={value.length} />
    </Fragment>
  );
};
