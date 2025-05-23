import React, { useState } from "react";

import GameInput from "@components/GameInput";
import GuessResults from "@components/GuessResults";
import WonBanner from "@components/WonBanner";
import LostBanner from "@components/LostBanner";
import Keyboard from "@components/Keyboard";

import { sample } from "@helpers/utils";
import { WORDS } from "@helpers/data";
import { checkGuess } from "@helpers/game-helper";

import { NUM_OF_GUESSES_ALLOWED } from "@helpers/constants";

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  console.log({ answer });
  // running | won | lost
  const [gameStatus, setGameStatus] = useState("running");
  const [guessList, setGuessList] = useState([]);

  function handleSubmitGuess(guess) {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);

    if (guess === answer) setGameStatus("won");
    if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) setGameStatus("lost");
  }

  function handleRestart() {
    const newWord = sample(WORDS);
    setAnswer(newWord);
    setGuessList([]);
    setGameStatus("running");
  }

  const validatedGuesses = guessList.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GameInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner numOfGuesses={guessList.length} action={handleRestart} />}
      {gameStatus === "lost" && <LostBanner answer={answer} action={handleRestart}></LostBanner>}
      <Keyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
