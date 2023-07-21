/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon63 } from "../../icons/Icon63";
import { Icon86 } from "../../icons/Icon86";
import { Rectangle73 } from "../../icons/Rectangle73";
import "./style.css";

export const NavLink = ({
  state,
  type,
  current,
  className,
  frameClassName,
  linkClassName,
  text = "Link",
  sectionClassName,
  text1 = "Section",
  visible = true,
}) => {
  return (
    <div className={`nav-link ${state} current-${current} ${className}`}>
      {current && ["hover", "normal"].includes(state) && (
        <>
          <div className="frame">
            <div className="link">
              {type === "link" && <>{text}</>}

              {type === "accordion" && <>{text1}</>}
            </div>
            {type === "accordion" && (
              <Icon63 className="instance-node" color={state === "normal" ? "#565C65" : "#005EA2"} />
            )}
          </div>
          <Rectangle73 className="rectangle" />
        </>
      )}

      {(!current || state === "active") && (
        <div className={`frame ${frameClassName}`}>
          <div
            className={`div ${type === "link" ? linkClassName : type === "accordion" ? sectionClassName : undefined}`}
          >
            {type === "link" && <>{text}</>}

            {type === "accordion" && <>{text1}</>}
          </div>
          {type === "accordion" && (
            <>
              <>
                {visible && (
                  <>
                    <>
                      {state === "active" && <Icon86 className="instance-node" />}

                      {!current && (
                        <Icon63 className="instance-node" color={state === "normal" ? "#565C65" : "#005EA2"} />
                      )}
                    </>
                  </>
                )}
              </>
            </>
          )}
        </div>
      )}
    </div>
  );
};

NavLink.propTypes = {
  state: PropTypes.oneOf(["normal", "active", "hover"]),
  type: PropTypes.oneOf(["link", "accordion"]),
  current: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
  visible: PropTypes.bool,
};
