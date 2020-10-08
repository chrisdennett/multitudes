import React from "react";

function radians_to_degrees(radians) {
  var pi = Math.PI;
  return radians * (180 / pi);
}

export const Face = ({ w, h, x, y, targ }) => {
  const origW = 25.9;
  const origH = 23.8;

  const scaleW = w / origW;
  const scaleH = h / origH;

  const origHeadWRadius = 10.5;
  //   const origHeadHRadius = 11.9;

  const eyeMinMax = { min: 1.8, max: 3 };
  const eyeRadius = eyeMinMax.max;

  const pupilMinMax = { min: 0.6, max: 1.1 };
  const pupilRadius = pupilMinMax.max;

  const headRadiusWMinMax = { min: 8, max: 12 };
  const headRadiusW = headRadiusWMinMax.max;
  const ear1OffsetX = origHeadWRadius - headRadiusW;
  const ear2OffsetX = -ear1OffsetX;

  const headRadiusHMinMax = { min: 10, max: 12 };
  const headRadiusH = headRadiusHMinMax.max;

  const mouthStart = { x: 8, y: 17.2 };
  const mouthEnd = { x: 18.5, y: 17.8 };
  const mouthPath = `
    M   ${mouthStart.x} ${mouthStart.y}, 
    S   9,              16.4
        13,              16.5, 
    C   16,              17.1
        17.5,            16.5
        ${mouthEnd.x}   ${mouthEnd.y}`;

  // rotation to zero
  const middleX = x + w / 2;
  const middleY = y + h / 2;

  const angle =
    270 + radians_to_degrees(Math.atan2(middleY - targ.y, middleX - targ.x));
  const lookStraighAhead = targ.x === middleX && targ.y === middleY;
  const pupilY = lookStraighAhead ? 0 : 0 - eyeRadius / 2;

  return (
    <>
      {/* <line
        x1={targ.x}
        y1={targ.y}
        x2={middleX}
        y2={middleY}
        style={{ stroke: "rgba(0,0,0,0.1)", strokeWidth: 1 }}
      />
      <ellipse cx={middleX} cy={middleY} fill="red" rx={5} ry={5} /> */}
      <g transform={`translate(${x}, ${y})`}>
        <g
          transform={`scale(${scaleW}, ${scaleH}) `}
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.5"
          paintOrder="markers fill stroke"
        >
          <g id="eye1">
            <ellipse cx="9.1" cy="10.4" rx={eyeRadius} ry={eyeRadius} />

            <g transform={`translate(9.1, 10.4) rotate(${angle})`}>
              <ellipse
                cx="0"
                cy={pupilY}
                fill="#000"
                rx={pupilRadius}
                ry={pupilRadius}
              />
            </g>
          </g>
          <g id="eye2">
            <ellipse cx="17.1" cy="10.4" rx={eyeRadius} ry={eyeRadius} />
            <g transform={`translate(17.1, 10.4) rotate(${angle})`}>
              <ellipse
                cx="0"
                cy={pupilY}
                fill="#000"
                rx={pupilRadius}
                ry={pupilRadius}
              />
            </g>
          </g>

          <g id="mouth">
            <path d={mouthPath} />
          </g>

          <g id="head">
            <ellipse cx="13.2" cy="12.2" rx={headRadiusW} ry={headRadiusH} />
            <g transform={`translate(${ear1OffsetX}, 0)`}>
              <path d="M.3 12.3c0 1.4 1 2.6 2.4 2.6m0-5.2a2.5 2.5 0 00-2.4 2.6" />
            </g>
            <g transform={`translate(${ear2OffsetX}, 0)`}>
              <path d="M26.2 12.3c0 1.4-1.1 2.6-2.5 2.6m0-5.2c1.4 0 2.5 1.2 2.5 2.6" />
            </g>
          </g>
        </g>
      </g>
    </>
  );
};
