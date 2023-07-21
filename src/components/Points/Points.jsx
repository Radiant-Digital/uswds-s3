/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon60 } from "../../icons/Icon60";
import "./style.css";

export const Points = ({
  color,
  className,
  icon = <Icon60 className="icon-60" color="white" />,
  text = "List of Centers by State",
  programsAreTheClassName,
  text1 = "Programs are the sources of unique AGID Datasets",
}) => {
  return (
    <div className={`points ${color} ${className}`}>
      {icon}
      <div className="content-2">
        <p className="list-of-centers-by">{text}</p>
        <p className={`programs-are-the ${programsAreTheClassName}`}>{text1}</p>
      </div>
    </div>
  );
};

Points.propTypes = {
  color: PropTypes.oneOf(["dark", "light"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
