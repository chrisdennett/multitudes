import React from "react";
import { saveAs } from "file-saver";
import useMouse from "@react-hook/mouse-position";
import TheMultitude from "./TheMultitude";

function App() {
  const ref = React.useRef(null);
  const mouse = useMouse(ref);

  const svgWidth = 1200;
  const svgHeight = 850;
  const faceWidth = 40;
  const padding = faceWidth / 9;

  const useMouseTarg = false;

  const targ = useMouseTarg
    ? mouse
    : { x: 14 * (faceWidth + padding), y: 8 * (faceWidth + padding) };

  const multitudeProps = { faceWidth, padding, svgWidth, svgHeight, targ };
  const onSaveSvgClick = () => save_as_svg();

  return (
    <div ref={ref}>
      <div>
        <button onClick={onSaveSvgClick}>Save SVG</button>
      </div>
      <svg
        id="svg"
        xmlns="http://www.w3.org/2000/svg"
        width={svgWidth}
        height={svgHeight}
      >
        <TheMultitude {...multitudeProps} />
      </svg>
    </div>
  );
}

export default App;

const save_as_svg = () => {
  var full_svg = get_svg_text();
  var blob = new Blob([full_svg], { type: "image/svg+xml" });
  saveAs(blob, "artfly-multitude.svg");
};

const get_svg_text = () => {
  var svg_data = document.getElementById("svg")
    ? document.getElementById("svg").outerHTML
    : "waiting"; //put id of your svg element here

  svg_data = svg_data.split(">").join(`>`);

  return svg_data;
};

/*
<filter
  id="filter"
  x="-20%"
  y="-20%"
  width="140%"
  height="140%"
  filterUnits="objectBoundingBox"
  primitiveUnits="userSpaceOnUse"
  colorInterpolationFilters="linearRGB"
>
  <feTurbulence
    type="turbulence"
    baseFrequency="0.15 0.05"
    numOctaves="3"
    seed="2"
    stitchTiles="stitch"
    x="0%"
    y="0%"
    width="100%"
    height="100%"
    result="turbulence"
  />
  <feDisplacementMap
    in="SourceGraphic"
    in2="turbulence"
    scale="1.5"
    xChannelSelector="R"
    yChannelSelector="B"
    x="0%"
    y="0%"
    width="100%"
    height="100%"
    result="displacementMap"
  />
</filter>


*/
