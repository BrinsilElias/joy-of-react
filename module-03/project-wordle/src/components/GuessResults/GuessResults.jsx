import React from "react";
import { range } from "../../helpers/utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../helpers/constants";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((row) => (
        <p key={row} className="guess">
          {range(0, 5, 1).map((col) => (
            <span key={col} className="cell">
              {guessList[row] && guessList[row][col]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
