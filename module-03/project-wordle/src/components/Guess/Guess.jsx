import React from "react";
import { checkGuess } from "@helpers/game-helper";

import { range } from "@helpers/utils";

function Cell({ status, letter }) {
  return <span className={`cell ${status ? status : ""}`}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(0, 5, 1).map((num) => (
        <Cell
          key={num}
          letter={result && result[num].letter}
          status={result && result[num].status}
        />
      ))}
    </p>
  );
}

export default Guess;
