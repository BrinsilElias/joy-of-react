import React, { useState } from "react";

function GameInput({ handleSubmitGuess }) {
  const [guess, setGuess] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      action=""
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSubmitGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        required
        onChange={(evt) => setGuess(evt.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GameInput;
