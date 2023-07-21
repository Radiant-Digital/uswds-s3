/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StateDefaultWrapper = ({ state, className, buttonClassName, text = "Button" }) => {
  return (
    <div className={`state-default-wrapper state-3-${state} ${className}`}>
      <div className={`button ${buttonClassName}`}>{text}</div>
    </div>
  );
};

StateDefaultWrapper.propTypes = {
  state: PropTypes.oneOf(["disabled", "hover", "active", "default"]),
  text: PropTypes.string,
};
