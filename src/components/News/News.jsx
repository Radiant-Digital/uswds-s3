/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowLink } from "../ArrowLink";
import "./style.css";

export const News = ({ image, className, img = "/img/image.png", arrowLinkIconClassName }) => {
  return (
    <div className={`news ${className}`}>
      {image === "right" && (
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="rectangle-2" />
            <ArrowLink
              className="arrow-link-instance"
              iconClassName={arrowLinkIconClassName}
              text="Read Article"
              viewAllProgramsClassName="arrow-link-2"
            />
            <div className="title-summary">
              <p className="duis-aute-irure">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
              </p>
              <p className="aging-in-the">Aging in the Southwest - It’s the Heat not the Humidity</p>
            </div>
            <div className="date-pub">
              <div className="january-AARP-wrapper">
                <p className="january-AARP">January 18, 2023 - AARP</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <img className="overlap-wrapper" alt="Image" src={image === "left" ? "/img/image-8.png" : img} />
      {image === "left" && (
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="rectangle-2" />
            <ArrowLink
              className="arrow-link-instance"
              iconClassName="arrow-link-3"
              text="Read Article"
              viewAllProgramsClassName="arrow-link-2"
            />
            <div className="title-summary">
              <p className="duis-aute-irure">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
              </p>
              <p className="aging-in-the">Aging in the Southwest - It’s the Heat not the Humidity</p>
            </div>
            <div className="date-pub">
              <div className="january-AARP-wrapper">
                <p className="january-AARP">January 18, 2023 - AARP</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

News.propTypes = {
  image: PropTypes.oneOf(["right", "left"]),
  img: PropTypes.string,
};
