/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonBig = ({ state, className, text = "Default" }) => {
  return (
    <div className={`button-big state-1-${state} ${className}`}>
      <div className="default-2">
        {state === "default" && <>{text}</>}

        {state === "hover" && <>Hover</>}

        {state === "active" && <>Active</>}

        {state === "disabled" && <>Disabled</>}

        {state === "unstyled" && <>Unstyled button</>}
      </div>
    </div>
  );
};

ButtonBig.propTypes = {
  state: PropTypes.oneOf(["unstyled", "active", "default", "hover", "disabled"]),
  text: PropTypes.string,
};
