/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Line4 } from "../../icons/Line4";
import { NavLink } from "../NavLink";
import { QuickSearch } from "../QuickSearch";
import { TopBanner } from "../TopBanner";
import "./style.css";

export const Header = ({
  breadcrumbs,
  version,
  className,
  quickSearchSearchGroupClassName,
  quickSearchSearchOverlapClassName,
  quickSearchSearchGroupClassNameOverride,
  text = "Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Programs&nbsp;&nbsp; &gt;&nbsp;&nbsp;Center for Independent Living",
  quickSearchSearchOverlapGroupWrapperClassName,
  quickSearchSearchOverlapClassNameOverride,
  navLinkText = "Contact",
  quickSearchSearchOverlapGroupClassName,
}) => {
  return (
    <div className={`header ${className}`}>
      <TopBanner className="top-banner-instance" />
      <div className="top-menu">
        <div className="right-side-menu">
          <NavLink
            className="nav-link-3"
            current={false}
            frameClassName="nav-link-instance"
            linkClassName="nav-link-2"
            state="normal"
            text="Help"
            type="link"
          />
          <NavLink
            className="nav-link-3"
            current={false}
            frameClassName="nav-link-instance"
            linkClassName="nav-link-2"
            state="normal"
            text={breadcrumbs === "on" ? navLinkText : "Contact"}
            type="link"
          />
        </div>
      </div>
      <div className={`logo-and-search ${version}`}>
        {version === "v-2" && (
          <>
            <div className="logo-block">
              <div className="AGID-title">
                <div className="aging-independence">Administration</div>
              </div>
            </div>
            <div className="spacer" />
          </>
        )}

        {version === "MVP" && <div className="administration">Administration</div>}

        <QuickSearch
          className="quick-search-instance"
          quickSearchClassName="quick-search-3"
          searchGroupClassName={`${
            version === "MVP" && breadcrumbs === "on"
              ? quickSearchSearchOverlapGroupWrapperClassName
              : breadcrumbs === "off" && version === "v-2"
              ? "class"
              : version === "v-2" && breadcrumbs === "on"
              ? quickSearchSearchGroupClassNameOverride
              : quickSearchSearchGroupClassName
          }`}
          searchOverlapClassName={`${
            version === "MVP" && breadcrumbs === "on"
              ? quickSearchSearchOverlapClassNameOverride
              : breadcrumbs === "off" && version === "v-2"
              ? "class-2"
              : version === "v-2" && breadcrumbs === "on"
              ? quickSearchSearchOverlapGroupClassName
              : quickSearchSearchOverlapClassName
          }`}
          searchVector3StyleOverrideClassName="quick-search-2"
        />
      </div>
      <div className="main-menu">
        <Line4 className="line" />
        <Line4 className="line" />
        <div className="main-menu">
          <Line4 className="line" />
          <Line4 className="line" />
          <div className="main-menu">
            <Line4 className="line" />
            <div className="menu-wrapper">
              <div className="menu">
                <NavLink
                  className="nav-link-4"
                  current={false}
                  sectionClassName="nav-link-5"
                  state="normal"
                  text1="Home"
                  type="accordion"
                  visible={false}
                />
                <div className="nav-link-wrapper">
                  <NavLink
                    className="nav-link-6"
                    current={false}
                    sectionClassName="nav-link-5"
                    state="normal"
                    text1="Release Notes"
                    type="accordion"
                    visible={false}
                  />
                </div>
                <NavLink
                  className="nav-link-4"
                  current={false}
                  sectionClassName="nav-link-5"
                  state="normal"
                  text1="Search by Topics"
                  type="accordion"
                />
                <NavLink
                  className="nav-link-4"
                  current={false}
                  sectionClassName="nav-link-5"
                  state="normal"
                  text1="Data Sets"
                  type="accordion"
                />
                <NavLink
                  className="nav-link-4"
                  current={false}
                  sectionClassName="nav-link-5"
                  state="normal"
                  text1="Data Explorer"
                  type="accordion"
                  visible={false}
                />
                <NavLink
                  className="nav-link-4"
                  current={false}
                  sectionClassName="nav-link-5"
                  state="normal"
                  text1="Reports"
                  type="accordion"
                />
                <div className="nav-link-instance-wrapper">
                  <NavLink
                    className="nav-link-6"
                    current={false}
                    sectionClassName="nav-link-5"
                    state="normal"
                    text1="Resources"
                    type="accordion"
                  />
                </div>
              </div>
            </div>
            <Line4 className="line-4" />
          </div>
        </div>
      </div>
      {breadcrumbs === "on" && (
        <div className="home-programs-center-wrapper">
          <p className="home-programs-center">{text}</p>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  breadcrumbs: PropTypes.oneOf(["off", "on"]),
  version: PropTypes.oneOf(["v-2", "MVP"]),
  text: PropTypes.string,
  navLinkText: PropTypes.string,
};
