/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon74 } from "../../icons/Icon74";
import { Vector3 } from "../../icons/Vector3";
import "./style.css";

export const Search = ({ size, className, overlapClassName, vector3StyleOverrideClassName, groupClassName }) => {
  return (
    <div className={`search ${size} ${className}`}>
      <div className={`overlap ${overlapClassName}`}>
        {size === "default" && (
          <>
            <img className="img" alt="Rectangle" src="/img/rectangle-1.png" />
            <div className={`group ${groupClassName}`}>
              <div className="search-wrapper">
                <div className="text-wrapper-2">Search</div>
              </div>
            </div>
          </>
        )}

        {["big", "small"].includes(size) && (
          <>
            <Vector3 className={vector3StyleOverrideClassName} />
            <div className={`group-2 ${groupClassName}`}>
              {size === "big" && (
                <div className="div-wrapper">
                  <div className="text-wrapper-3">Search</div>
                </div>
              )}

              {size === "small" && <Icon74 className="icon-74" color="white" />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  size: PropTypes.oneOf(["big", "small", "default"]),
};
