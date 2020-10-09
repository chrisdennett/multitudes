import React, { useState, useEffect } from "react";
import { Face, getRandomFaceParams } from "./Face";

const TheMultitude = ({ faceWidth, padding, svgWidth, svgHeight, targ }) => {
  const [allFaceParams, setAllFaceParams] = useState(null);

  useEffect(() => {
    setAllFaceParams(getAllFaceParams());
    // eslint-disable-next-line
  }, [faceWidth, padding, svgWidth, svgHeight]);

  const getAllFaceParams = () => {
    const faceHeight = faceWidth;
    const boxW = faceWidth + padding * 2;
    const boxH = faceHeight + padding * 2;
    const cols = Math.floor(svgWidth / boxW);
    const rows = Math.floor(svgHeight / boxH);
    const faces = [];

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const randFaceParams = getRandomFaceParams({
          w: faceWidth,
          h: faceHeight,
        });
        const x = padding + c * boxW;
        const y = padding + r * boxH;
        const w = faceWidth;
        const h = faceHeight;

        faces.push({ ...randFaceParams, x, y, w, h });
      }
    }
    return faces;
  };

  if (!allFaceParams) return null;

  return (
    <g>
      {/* <g transform={`translate(${2}, ${2})`} stroke={"rgba(0,0,0,0.2)"}>
        {allFaceParams.map((faceParams, index) => (
          <Face key={index} faceParams={faceParams} targ={targ} />
        ))}
      </g> */}
      <g transform={`translate(${0}, ${0})`} stroke={"black"}>
        {allFaceParams.map((faceParams, index) => (
          <Face key={index} faceParams={faceParams} targ={targ} />
        ))}
      </g>
    </g>
  );
};

export default TheMultitude;
