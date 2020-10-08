import React from "react";

export const Face = ({ w, h, x, y }) => {
  const origW = 25.9;
  const origH = 23.8;
  //   const origW = 26.5;
  //   const origH = 24.3;
  const scaleW = w / origW;
  const scaleH = h / origH;

  return (
    <g transform={`translate(${x}, ${y})`}>
      <g transform={`scale(${scaleW}, ${scaleH}) `}>
        <g
          id="eye1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.5"
          color="#000"
          paintOrder="markers fill stroke"
        >
          <ellipse
            id="path1430"
            cx="9.1"
            cy="10.4"
            fill="none"
            stroke="#000"
            overflow="visible"
            rx="2.4"
            ry="2.6"
          ></ellipse>
          <ellipse
            id="ellipse1443"
            cx="9.1"
            cy="10.4"
            fill="#000"
            stroke="none"
            overflow="visible"
            rx="1"
            ry="1.1"
          ></ellipse>
        </g>
        <g
          id="eye2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.5"
          color="#000"
          paintOrder="markers fill stroke"
        >
          <ellipse
            id="ellipse1434"
            cx="17.1"
            cy="10.4"
            fill="none"
            stroke="#000"
            overflow="visible"
            rx="2.4"
            ry="2.6"
          ></ellipse>
          <ellipse
            id="ellipse1445"
            cx="17.1"
            cy="10.4"
            fill="#000"
            stroke="none"
            overflow="visible"
            rx="1.2"
            ry="1.3"
          ></ellipse>
        </g>
        <g id="mouth">
          <path
            id="path1436"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.5"
            d="M7.9 17.4s1-.6 4.9-.5c4 .1 5.5.5 5.5.5"
            color="#000"
            overflow="visible"
            paintOrder="markers fill stroke"
          ></path>
        </g>
        <g
          id="head"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.5"
          color="#000"
          paintOrder="markers fill stroke"
        >
          <ellipse
            id="path1428"
            cx="13.2"
            cy="12.2"
            overflow="visible"
            rx="10.5"
            ry="11.9"
          ></ellipse>
          <path
            id="ellipse1438"
            d="M26.2 12.3c0 1.4-1.1 2.6-2.5 2.6m0-5.2c1.4 0 2.5 1.2 2.5 2.6"
            overflow="visible"
          ></path>
          <path
            id="path1441"
            d="M.3 12.3c0 1.4 1 2.6 2.4 2.6m0-5.2a2.5 2.5 0 00-2.4 2.6"
            overflow="visible"
          ></path>
        </g>
      </g>
    </g>
  );
};
