/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowLink } from "../ArrowLink";
import "./style.css";

export const Datasets = ({ state, censusClassName, text = "Census 2010", arrowLinkIconClassName }) => {
  return (
    <div className={`datasets state-${state}`}>
      <div className="frame-4">
        <div className="dataset">Dataset</div>
        <div className={`census ${censusClassName}`}>{text}</div>
      </div>
      <p className="convallis-turpis">
        Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <ArrowLink
        className="arrow-link-5"
        iconClassName={arrowLinkIconClassName}
        text="View Data Set"
        viewAllProgramsClassName="arrow-link-4"
      />
    </div>
  );
};

Datasets.propTypes = {
  state: PropTypes.oneOf(["roll", "default"]),
  text: PropTypes.string,
};
