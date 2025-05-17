import React from "react";
import { range } from "../utils/utils";

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(0, numRows).map((row) => (
        <div key={row} className="row">
          {range(0, numCols).map((col) => (
            <div key={col} className="cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
