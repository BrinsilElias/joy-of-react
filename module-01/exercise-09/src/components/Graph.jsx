import React from "react";
import { range } from "../utils/utils";

function Graph({ from, to }) {
  return (
    <div className="graph">
      {range(from, to + 1, 10).map((value) => (
        <div key={value} className="peg">
          {value}
        </div>
      ))}
    </div>
  );
}

export default Graph;
