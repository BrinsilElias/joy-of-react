import React from "react";
import Sidenote from "./Sidenote/Sidenote";

function App() {
  return (
    <>
      <Sidenote type="notice" title="This is a notice">
        Hello World
      </Sidenote>
      <Sidenote type="success" title="This is success!">
        Yay!
      </Sidenote>
    </>
  );
}

export default App;
