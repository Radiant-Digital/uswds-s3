/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon9 = ({ color = "#F0F0F0", className }) => {
  return (
    <svg
      className={`icon-9 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.375 10.8392L4.48333 16.7308C4.32837 16.8856 4.20544 17.0694 4.12157 17.2718C4.03769 17.4741 3.99452 17.691 3.99452 17.91C3.99452 18.129 4.03769 18.3459 4.12157 18.5482C4.20544 18.7506 4.32837 18.9344 4.48333 19.0892C4.79588 19.4016 5.21973 19.5772 5.66167 19.5772C6.10361 19.5772 6.52745 19.4016 6.84 19.0892L12.7317 13.1958M16.3275 13.5L19.5592 16.7317C19.8716 17.0442 20.0471 17.4681 20.0471 17.91C20.0471 18.3519 19.8716 18.7758 19.5592 19.0883C19.2466 19.4008 18.8228 19.5763 18.3808 19.5763C17.9389 19.5763 17.515 19.4008 17.2025 19.0883L12.0283 13.915M7.61083 6.92L5.84167 7.50834L4.075 4.5625L5.25333 3.38417L8.2 5.15167L7.61083 6.92ZM7.61083 6.92L9.96917 9.27834"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M10.375 10.8392C9.67167 9.045 9.80917 6.69084 11.2592 5.24084C12.7092 3.79084 15.3842 3.47334 16.8567 4.35751L14.3233 6.89084L14.0875 9.48334L16.68 9.24834L19.2133 6.71417C20.0983 8.18751 19.78 10.8625 18.33 12.3117C16.88 13.7617 14.5267 13.8992 12.7325 13.1958"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Icon9.propTypes = {
  color: PropTypes.string,
};
