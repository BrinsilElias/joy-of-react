import React from "react";

import { ROWS } from "@helpers/constants";

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};
  // `.flat()` is a method that flattens nested arrays.
  // Here it produces an array containing all of the letter/status
  // objects for each guess.
  const allLetters = validatedGuesses.flat();

  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statusObj[letter];

    if (currentStatus === undefined) {
      statusObj[letter] = status;
      return;
    }

    // The same letter might have multiple matched statuses.
    // For example, if the answer is "APPLE" and the user guesses
    // "PAPER", then the letter "P" is misplaced (for the first P)
    // and correct (for the second P).
    //
    // We want to prioritize the statuses in this order:
    const STATUS_RANKS = {
      correct: 1,
      misplaced: 2,
      incorrect: 3,
    };

    const currentStatusRank = STATUS_RANKS[currentStatus];
    const newStatusRank = STATUS_RANKS[status];

    if (newStatusRank < currentStatusRank) {
      statusObj[letter] = status;
    }
  });

  return statusObj;
}

function Keyboard({ validatedGuesses }) {
  const statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <kbd key={letter} className={`letter ${statusByLetter[letter]}`}>
              {letter}
            </kbd>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
