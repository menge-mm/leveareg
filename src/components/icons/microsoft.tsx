import React from "react";

const Microsoft = ({ w = 32, h = 32 }) => {
  return (
    <svg
      style={{ overflow: "visible" }}
      viewBox="0 0 32 32"
      width={w}
      height={h}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      enableBackground={"new 0 0 32 32"}
    >
      <g>
        <g id="Microsoft_1_">
          <g id="Microsoft">
            <g id="Blue_x5F_Square">
              <rect height="15" style={{ fill: "#51AED9" }} width="15" y="17" />
            </g>
            <g id="Yellow_x5F_Square">
              <rect height="15" style={{ fill: "#FEC327" }} width="15" x="17" y="17" />
            </g>
            <g id="Green_x5F_Square">
              <rect height="15" style={{ fill: "#34B67A" }} width="15" x="17" />
            </g>
            <g id="Orange_x5F_Square">
              <rect height="15" style={{ fill: "#F15723" }} width="15" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Microsoft;
