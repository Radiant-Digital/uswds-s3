/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon25 } from "../../icons/Icon25";
import { Icon27 } from "../../icons/Icon27";
import { Icon30 } from "../../icons/Icon30";
import { Icon32 } from "../../icons/Icon32";
import { Icon94 } from "../../icons/Icon94";
import { FooterPrimaryLink } from "../FooterPrimaryLink";
import "./style.css";

export const Footer = ({
  className,
  hasReturnToTop = true,
  icon = <Icon25 className="icon-3" />,
  override = <Icon94 className="icon-3" />,
  icon1 = <Icon30 className="icon-3" />,
  icon2 = <Icon27 className="icon-3" />,
  icon3 = <Icon32 className="icon-3" />,
  returnToTopClassName,
  returnToTopClassNameOverride,
}) => {
  return (
    <div className={`footer ${className}`}>
      {hasReturnToTop && (
        <div className={`return-to-top ${returnToTopClassNameOverride}`}>
          <div className={`group-wrapper ${returnToTopClassName}`}>
            <div className="overlap-group-wrapper">
              <div className="return-to-top-wrapper">
                <div className="return-to-top-2">Return to top</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="primary-links">
        <FooterPrimaryLink
          className="footer-primary-link-instance"
          documentationClassName="footer-primary-link-2"
          dropdown={false}
          text="Legal"
        />
        <FooterPrimaryLink
          className="footer-primary-link-instance"
          documentationClassName="footer-primary-link-2"
          dropdown={false}
          text="Accessibility"
        />
        <FooterPrimaryLink
          className="footer-primary-link-instance"
          documentationClassName="footer-primary-link-2"
          dropdown={false}
          text="Privacy"
        />
        <FooterPrimaryLink
          className="footer-primary-link-instance"
          documentationClassName="footer-primary-link-2"
          dropdown={false}
          text="Cookies"
        />
        <FooterPrimaryLink
          className="footer-primary-link-instance"
          documentationClassName="footer-primary-link-2"
          dropdown={false}
          text="Account"
        />
      </div>
      <div className="ACL">
        <div className="contact">
          <div className="socials">
            <div className="icon-wrapper">{icon}</div>
            <div className="icon-wrapper">{override}</div>
            <div className="icon-wrapper">{icon1}</div>
            <div className="icon-wrapper">{icon2}</div>
            <div className="icon-wrapper">{icon3}</div>
          </div>
          <div className="agency-contact">
            <div className="contact-us">Contact Us</div>
            <div className="group-3">
              <div className="frame-10">
                <div className="text-wrapper-8">(202) 401-4634</div>
                <div className="text-wrapper-8">info@gov.gov</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-map">
        <div className="column-wrapper">
          <div className="column">
            <div className="column">
              <div className="discover-wrapper">
                <div className="discover">
                  <div className="text-wrapper-9">Programs</div>
                  <div className="footer-link">
                    <div className="footer-link-2">All Programs</div>
                  </div>
                  <div className="footer-link">
                    <div className="footer-link-2">Center for Independent Living</div>
                  </div>
                  <div className="footer-link">
                    <div className="footer-link-2">Independent Living Services</div>
                  </div>
                  <div className="footer-link">
                    <p className="footer-link-2">Title III - State Programs</p>
                  </div>
                  <div className="footer-link">
                    <p className="footer-link-2">Title VI - Native Americans</p>
                  </div>
                  <div className="footer-link">
                    <p className="footer-link-2">Title VII - Long Term Care Ombudsman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-11">
          <div className="column">
            <div className="discover">
              <div className="text-wrapper-9">Topics</div>
              <div className="footer-link">
                <div className="footer-link-2">Topic Navigator</div>
              </div>
            </div>
          </div>
        </div>
        <div className="column-wrapper">
          <div className="column">
            <div className="column">
              <div className="discover">
                <div className="text-wrapper-9">Data</div>
                <div className="footer-link">
                  <div className="footer-link-2">About&nbsp;&nbsp;the Data</div>
                </div>
                <div className="footer-link">
                  <div className="footer-link-2">Data Products</div>
                </div>
                <div className="footer-link">
                  <div className="footer-link-2">Data Sets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-11">
          <div className="column">
            <div className="discover">
              <div className="text-wrapper-9">Data Tools</div>
              <div className="footer-link">
                <p className="footer-link-2">How to Use Data Tools</p>
              </div>
              <div className="footer-link">
                <div className="footer-link-2">Compare Data</div>
              </div>
              <div className="footer-link">
                <div className="footer-link-2">Data Maps</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-11">
          <div className="column">
            <div className="discover">
              <div className="text-wrapper-9">New &amp; Resources</div>
              <div className="footer-link">
                <p className="footer-link-2">News / Briefs / Fact Sheets</p>
              </div>
              <div className="footer-link">
                <div className="footer-link-2">Release Notes</div>
              </div>
              <div className="footer-link">
                <div className="footer-link-2">Tutorials</div>
              </div>
              <div className="footer-link">
                <div className="footer-link-2">Webinars</div>
              </div>
              <div className="footer-link">
                <div className="footer-link-2">FAQ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="identifier-default">
        <div className="frame-12">
          <div className="frame-13">
            <div className="frame-14">
              <div className="text-wrapper-10">Accessibility support</div>
            </div>
            <div className="frame-14">
              <div className="text-wrapper-10">FOIA requests</div>
              <div className="text-wrapper-11">No FEAR Act data</div>
            </div>
            <div className="frame-14">
              <p className="text-wrapper-10">Office of the Inspector General</p>
              <div className="text-wrapper-11">Performance reports</div>
            </div>
            <div className="text-wrapper-10">Privacy Policy</div>
          </div>
          <p className="looking-for-u-s">
            <span className="text-wrapper-12">
              Looking for U.S. government information and services?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-wrapper-13">Visit USA.gov</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  hasReturnToTop: PropTypes.bool,
};
