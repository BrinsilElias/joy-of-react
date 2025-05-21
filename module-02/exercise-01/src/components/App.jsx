import React from "react";

import VisuallyHidden from "./VisuallyHidden";

function ClickBallGame() {
  return (
    <div className="wrapper">
      <button className="ball" onClick={() => alert("You win")}>
        <VisuallyHidden>Ball</VisuallyHidden>
      </button>
    </div>
  );
}

export default ClickBallGame;
