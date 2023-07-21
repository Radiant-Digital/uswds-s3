/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ReleaseNotes = ({ className, versionClassName }) => {
  return (
    <div className={`release-notes ${className}`}>
      <div className="archives">Archives</div>
      <p className={`version ${versionClassName}`}>
        Version 2.3: 2019 National Survey of Older Americans Act Participants
        <br />
        Version 2.1: 2019 Long-Term Care Ombudsman Programs
        <br />
        Version 1.9: 2019 National Survey of Older Americans Act Participants
        <br />
        Version 2.1: 2019 Long-Term Care Ombudsman Programs
        <br />
        Version 1.9: 2019 National Survey of Older Americans Act Participants
        <br />
        Version 1.9: 2019 National Survey of Older Americans Act Participants
      </p>
    </div>
  );
};
