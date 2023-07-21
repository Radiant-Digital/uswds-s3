/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Vector46 } from "../../icons/Vector46";
import { ArrowLink } from "../ArrowLink";
import "./style.css";

export const DataProduct = ({
  state,
  image = "/img/image-4-6.png",
  ACLLogo = "/img/acl-logo-6.png",
  arrowLinkIconClassName,
}) => {
  return (
    <div className={`data-product state-0-${state}`}>
      <div className="frame-5">
        <div className="top-heading">
          <div className="AGING">AGING</div>
          <Vector46 className="vector" />
          <div className="SPR">SPR</div>
        </div>
        <div className="chart">
          <div className="chart-and-title">
            <p className="congregate-meals-and">
              Congregate meals and home-delivered meals served between 2017 and 2018 in Oklahoma
            </p>
            <div className="image-wrapper">
              <img className="image" alt="Image" src={image} />
            </div>
            <div className="ACL-logo-and-text">
              <p className="lorem-ipsum-dolor">
                <span className="span">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis lectus eget nisi molestie,
                  non porta augue feugiat. Donec ac ligula nec nulla faucibus elementum. Integer at elementum mi. Nunc
                  ligula est, commodo at ornare accumsan, luctus vel elit.{" "}
                </span>
                <span className="text-wrapper-5">Custom link looks like this.</span>
              </p>
              <img className="ACL-logo" alt="Acl logo" src={ACLLogo} />
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="frame-6">
            {state === "default" && <p className="text-wrapper-6">Case Study | Data Comparrison</p>}

            {state === "roll" && <div className="text-wrapper-6">Data Product</div>}

            <p className="element-title-III">2013-2015 Title III and Title VI Congregate Delivered Meals Served</p>
          </div>
          <p className="p">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
          </p>
        </div>
        <ArrowLink
          className="arrow-link-7"
          iconClassName={arrowLinkIconClassName}
          text="View Case Study"
          viewAllProgramsClassName="arrow-link-6"
        />
      </div>
    </div>
  );
};

DataProduct.propTypes = {
  state: PropTypes.oneOf(["roll", "default"]),
  image: PropTypes.string,
  ACLLogo: PropTypes.string,
};
