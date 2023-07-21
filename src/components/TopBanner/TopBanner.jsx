/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon73 } from "../../icons/Icon73";
import "./style.css";

export const TopBanner = ({ className }) => {
  return (
    <div className={`top-banner ${className}`}>
      <div className="banner-content">
        <img className="us-flag-small" alt="Us flag small" src="/img/us-flag-small.png" />
        <div className="content">
          <p className="an-official-website">An official website of the United States government</p>
          <div className="here-s-how-you-know">
            <div className="overlap-group">
              <div className="text-wrapper">Here’s how you know</div>
              <Icon73 className="icon-73" color="#005EA2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
