import React from "react";

import Guess from "@components/Guess";

import { range } from "@helpers/utils";
import { NUM_OF_GUESSES_ALLOWED } from "@helpers/constants";

function GuessResults({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((num) => (
        <Guess key={num} value={guessList[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
