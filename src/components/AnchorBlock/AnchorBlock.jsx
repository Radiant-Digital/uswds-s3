/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon6 } from "../../icons/Icon6";
import { Icon7 } from "../../icons/Icon7";
import { Icon8 } from "../../icons/Icon8";
import { Icon9 } from "../../icons/Icon9";
import { Points } from "../Points";
import "./style.css";

export const AnchorBlock = ({
  className,
  pointsIcon = <Icon6 className="icon-instance-node" />,
  override = <Icon7 className="icon-instance-node" />,
  pointsIcon1 = <Icon8 className="icon-instance-node" color="white" />,
  pointsIcon2 = <Icon9 className="icon-instance-node" color="#F0F0F0" />,
}) => {
  return (
    <div className={`anchor-block ${className}`}>
      <div className="text">
        <div className="frame-3">
          <div className="what-is">What is Administration?</div>
          <p className="your-source-of-truth">Your source of truth for Aging, Disability, Tribal and Census Data</p>
        </div>
        <p className="the-program-data">
          The Program Data Portal is an on-line query system based on related data files and surveys, and includes
          population characteristics from the Census Bureau for comparison purposes.
        </p>
      </div>
      <div className="anchors">
        <Points
          className="points-instance"
          color="light"
          icon={pointsIcon}
          programsAreTheClassName="design-component-instance-node"
          text="Topic Navigator"
          text1="Search for data using common topics and sub-topics"
        />
        <Points
          className="points-2"
          color="light"
          icon={override}
          programsAreTheClassName="design-component-instance-node"
          text="Data Sets"
          text1="Cleaned, curated data derived from Program activities and measurement​"
        />
        <Points
          className="points-2"
          color="light"
          icon={pointsIcon1}
          text="Reports"
          text1="Visualize data with interactive and standard data reports"
        />
        <Points
          className="points-3"
          color="light"
          icon={pointsIcon2}
          text="Data Explorer"
          text1="Create and export Custom Tables from Data Sets"
        />
      </div>
    </div>
  );
};
