import React from "react";

const CORRECT_CODE = "123456";

function TwoFactor() {
  const [code, setCode] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const isCorrect = code === CORRECT_CODE;
    window.alert(isCorrect ? "Correct!" : "Incorrect");
    setCode("");
  }

  return (
    <>
      <label htmlFor="auth-code">Enter authorization code:</label>
      <div className="row">
        <form action="" onSubmit={handleSubmit}>
          <input
            id="auth-code"
            type="text"
            value={code}
            required={true}
            maxLength={6}
            onChange={(event) => setCode(event.target.value)}
          />
          <button>Validate</button>
        </form>
      </div>
    </>
  );
}

export default TwoFactor;
