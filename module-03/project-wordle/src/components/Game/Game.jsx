import React, { useState } from "react";

import { sample } from "../../helpers/utils";
import { WORDS } from "../../helpers/data";

import GameInput from "../GameInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);

  function handleSubmitGuess(guess) {
    setGuessList([...guessList, guess]);
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GameInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
