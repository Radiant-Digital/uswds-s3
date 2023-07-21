/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { DataProduct } from "../DataProduct";
import { StateDefaultWrapper } from "../StateDefaultWrapper";
import "./style.css";

export const AgidInAction = ({ className }) => {
  return (
    <div className={`AGID-in-action ${className}`}>
      <div className="frame-7">
        <div className="frame-8">
          <div className="reports-dashboards">Reports &amp; Dashboards</div>
          <div className="administration-in">Administration in Action</div>
        </div>
        <p className="an-explanation-of">
          <span className="text-wrapper-7">
            An explanation of how to use the Data Products below. The Administration oversees Administration on Aging
            (AoA) programs and conducts the National Survey of Older Americans Act (OAA) Participants.
          </span>
        </p>
        <StateDefaultWrapper
          buttonClassName="button-big-2"
          className="button-big-instance"
          state="default"
          text="View All Data Products"
        />
      </div>
      <div className="frame-9">
        <DataProduct
          ACLLogo="/img/acl-logo.png"
          arrowLinkIconClassName="data-product-instance"
          image="/img/image-4.png"
          state="default"
        />
        <DataProduct
          ACLLogo="/img/acl-logo.png"
          arrowLinkIconClassName="data-product-instance"
          image="/img/image-4.png"
          state="default"
        />
        <DataProduct
          ACLLogo="/img/acl-logo.png"
          arrowLinkIconClassName="data-product-instance"
          image="/img/image-4.png"
          state="default"
        />
      </div>
    </div>
  );
};
