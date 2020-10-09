import React from "react";

export const Face = ({ faceParams, targ }) => {
  if (!faceParams) return null;
  const { x, y, w, h } = faceParams;
  // rotation to zero
  const faceMiddle = { x: x + w / 2, y: y + h / 2 };
  const radians = Math.atan2(faceMiddle.y - targ.y, faceMiddle.x - targ.x);
  const angle = 270 + radians_to_degrees(radians);
  const lookStraighAhead =
    targ.x >= x && targ.x <= x + w && targ.y >= y && targ.y <= y + h;
  const pupilY = lookStraighAhead ? 0 : 0 - faceParams.eyeRadius / 2;

  const mouth = lookStraighAhead
    ? getMouthPath(faceParams.mouthStart, faceParams.mouthEnd, true)
    : faceParams.mouthPath;

  const strokeThickness = 1;

  return (
    <>
      <g transform={`translate(${x}, ${y})`}>
        <g
          transform={`scale(${faceParams.scaleW}, ${faceParams.scaleH}) `}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeThickness}
          paintOrder="markers fill stroke"
        >
          <g id="eye1">
            <ellipse
              cx="9.1"
              cy="10.4"
              rx={faceParams.eyeRadius}
              ry={faceParams.eyeRadius}
            />

            <g transform={`translate(9.1, 10.4) rotate(${angle})`}>
              <ellipse
                cx="0"
                cy={pupilY}
                rx={faceParams.pupilRadius}
                ry={faceParams.pupilRadius}
              />
              <ellipse
                cx="0"
                cy={pupilY}
                rx={faceParams.pupilRadius / 2}
                ry={faceParams.pupilRadius / 2}
              />
            </g>
          </g>
          <g id="eye2">
            <ellipse
              cx="17.1"
              cy="10.4"
              rx={faceParams.eyeRadius}
              ry={faceParams.eyeRadius}
            />
            <g transform={`translate(17.1, 10.4) rotate(${angle})`}>
              <ellipse
                cx="0"
                cy={pupilY}
                rx={faceParams.pupilRadius}
                ry={faceParams.pupilRadius}
              />
              <ellipse
                cx="0"
                cy={pupilY}
                rx={faceParams.pupilRadius / 2}
                ry={faceParams.pupilRadius / 2}
              />
            </g>
          </g>

          <g id="mouth">
            <path d={mouth} />
          </g>

          <g id="head">
            <ellipse
              cx="13.2"
              cy="12.2"
              rx={faceParams.headRadiusW}
              ry={faceParams.headRadiusH}
            />
            <g transform={`translate(${faceParams.ear1OffsetX}, 0)`}>
              <path d="M.3 12.3c0 1.4 1 2.6 2.4 2.6m0-5.2a2.5 2.5 0 00-2.4 2.6" />
            </g>
            <g transform={`translate(${faceParams.ear2OffsetX}, 0)`}>
              <path d="M26.2 12.3c0 1.4-1.1 2.6-2.5 2.6m0-5.2c1.4 0 2.5 1.2 2.5 2.6" />
            </g>
          </g>
        </g>
      </g>
    </>
  );
};

function radians_to_degrees(radians) {
  var pi = Math.PI;
  return radians * (180 / pi);
}

const getRandomNumberBetween = (minMax) => {
  const { min, max } = minMax;
  const diff = max - min;
  const rand = Math.random() * diff;

  return min + rand;
};

const getMouthPath = (mouthStart, mouthEnd, isSmiling = false) => {
  const y1 = isSmiling ? mouthStart.y - 2.6 : mouthStart.y;
  const y2 = isSmiling ? mouthEnd.y - 2.6 : mouthStart.y;

  return `
    M   ${mouthStart.x} ${y1}, 
    S   9,              16.4
        13,              16.5, 
    C   16,              17.1
        17.5,            16.5
        ${mouthEnd.x}   ${y2}`;
};

export const getRandomFaceParams = ({ w, h }) => {
  const origW = 25.9;
  const origH = 23.8;

  const scaleW = w / origW;
  const scaleH = h / origH;

  const origHeadWRadius = 10.5;

  const eyeMinMax = { min: 2.5, max: 3.5 };
  const eyeRadius = getRandomNumberBetween(eyeMinMax);

  const pupilMinMax = { min: 0.6, max: 0.8 };
  const pupilRadius = getRandomNumberBetween(pupilMinMax);

  const headRadiusWMinMax = { min: 9, max: 11 };
  const headRadiusW = getRandomNumberBetween(headRadiusWMinMax);
  const ear1OffsetX = origHeadWRadius - headRadiusW;
  const ear2OffsetX = -ear1OffsetX;

  const headRadiusHMinMax = { min: 9, max: 11 };
  const headRadiusH = getRandomNumberBetween(headRadiusHMinMax);

  const mouthStart = { x: 8 + Math.random(), y: 17.2 + Math.random() };
  const mouthEnd = { x: 18.5 + Math.random(), y: 17.8 + Math.random() };
  const mouthPath = getMouthPath(mouthStart, mouthEnd);

  return {
    scaleW,
    scaleH,
    eyeRadius,
    pupilRadius,
    mouthPath,
    headRadiusW,
    headRadiusH,
    ear1OffsetX,
    ear2OffsetX,
    mouthStart,
    mouthEnd,
  };
};

/* 
FOR DEBUGGING
<line
  x1={targ.x}
  y1={targ.y}
  x2={middleX}
  y2={middleY}
  style={{ stroke: "rgba(0,0,0,0.1)", strokeWidth: 1 }}
/>
<ellipse cx={middleX} cy={middleY} fill="red" rx={5} ry={5} /> 
*/
