import React from "react";
import "./App.css";
import { Face } from "./Face";

function App() {
  const svgWidth = 850;
  const svgHeight = 850;
  const faceWidth = 60;
  const padding = faceWidth / 3;
  const faceHeight = faceWidth;
  const boxW = faceWidth + padding * 2;
  const boxH = faceHeight + padding * 2;
  const cols = Math.floor(svgWidth / boxW);
  const rows = Math.floor(svgHeight / boxH);

  const targ = { x: boxW / 2, y: boxH / 2 };

  const faces = [];

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      faces.push(
        <Face
          key={c + "_" + r}
          targ={targ}
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
