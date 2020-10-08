import React from "react";
import "./App.css";
import { Face } from "./Face";

function App() {
  const svgWidth = 1000;
  const svgHeight = 850;
  const padding = 10;
  const faceWidth = 50;
  const faceHeight = 50;
  const boxW = faceWidth + padding * 2;
  const boxH = faceHeight + padding * 2;
  const cols = Math.floor(svgWidth / boxW);
  const rows = Math.floor(svgHeight / boxH);

  const faces = [];

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      faces.push(
        <Face
          w={faceWidth}
          h={faceHeight}
          x={padding + c * boxW}
          y={padding + r * boxH}
        />
      );
    }
  }

  return (
    <div>
      <svg width={svgWidth} height={svgHeight}>
        {faces}
      </svg>
    </div>
  );
}

export default App;
